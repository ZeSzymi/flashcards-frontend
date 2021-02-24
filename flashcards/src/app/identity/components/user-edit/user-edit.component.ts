import { NotifierService } from 'angular-notifier';
import { UsersDataService } from './../../services/users-data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from './../../../services/auth.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RolesDataService } from '../../services/roles-data.service';
import { forkJoin } from 'rxjs';
import { Role } from 'src/app/models/roles.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  constructor(private _rolesDataService: RolesDataService,
    @Inject(MAT_DIALOG_DATA) public user: User,
    private dialogRef: MatDialogRef<UserEditComponent>,
    private _usersService: UsersDataService,
    private _notifierService: NotifierService
    ) { }

  group: FormGroup;
  roles: Role[] = [];
  rolesForUser: Role[] = [];
  rolesControlArray: FormArray = new FormArray([]);

  ngOnInit() {
    this.group = new FormGroup({
      roles: new FormArray([])
    })

    forkJoin([
      this._rolesDataService.getRoles(),
      this._rolesDataService.getRolesForUser(this.user.id)
    ]).subscribe((subs: [Role[], Role[]]) => {
      this.roles = subs[0];
      this.rolesForUser = subs[1];
      this.rolesControlArray =  this.group.controls['roles'] as FormArray;
      this.roles.forEach(role => this.rolesForUser.map(roleForUser => roleForUser.id).includes(role.id)
      ? this.rolesControlArray.push(new FormControl(true)) : this.rolesControlArray.push(new FormControl(false)))
    })
  }

  changeUserRoles() {
    const rolesChosen = this.rolesControlArray.value as boolean[];
    const userWithRoles = {
      userId: this.user.id,
      roleIds: rolesChosen.map((state, index) => state ? this.roles[index].id : null).filter(roleId => roleId != null)
    }
    console.log(userWithRoles);
    this._usersService.addRolesToUser(userWithRoles).subscribe(() => {
      this._notifierService.notify('success', 'IDENTITY.ROLES_CHANGED_SUCCESSFULLY')
      this.dialogRef.close();
    })
  }

}
