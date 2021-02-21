import { RolesDataService } from './../../services/roles-data.service';
import { Claim, Role } from './../../../models/roles.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-roles-edit',
  templateUrl: './roles-edit.component.html',
  styleUrls: ['./roles-edit.component.scss']
})
export class RolesEditComponent implements OnInit {

  constructor(private _rolesDataService: RolesDataService, @Inject(MAT_DIALOG_DATA) public data: Role) { }

  group: FormGroup;
  claims: Claim;

  ngOnInit() {
    this._rolesDataService.getClaims().subscribe((claims: Claim) => {this.claims = claims; console.log(claims)});
    this.group = new FormGroup({
      name: new FormControl(),
      privileges: new FormArray([])
    })
  }

  addRole() {
    console.log(this.group.value);
    //this._rolesDataService.addRole().subscribe
  }

}
