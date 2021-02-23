import { RolesDataService } from './../../services/roles-data.service';
import { Claim, Role } from './../../../models/roles.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-roles-edit',
  templateUrl: './roles-edit.component.html',
  styleUrls: ['./roles-edit.component.scss']
})
export class RolesEditComponent implements OnInit {

  constructor(private _rolesDataService: RolesDataService, @Inject(MAT_DIALOG_DATA) public data: Role, private dialogRef: MatDialogRef<RolesEditComponent>,
  private notifierService: NotifierService, private translateService: TranslateService) { }

  group: FormGroup;
  claims: Claim;

  ngOnInit() {
    this._rolesDataService.getClaims().subscribe((claims: Claim) => { this.claims = claims; console.log(claims) });
    this.group = new FormGroup({
      name: new FormControl(),
      claimIds: new FormControl()
    })
  }

  addRole() {
    this._rolesDataService.addRole(this.group.value).subscribe(() => {
      this.notifierService.notify('success', this.translateService.instant('IDENTITY.ROLE_ADDED_SUCCESSFULLY'));
      this.dialogRef.close()
    })
  }

}
