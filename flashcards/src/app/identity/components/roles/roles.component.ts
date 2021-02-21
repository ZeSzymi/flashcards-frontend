import { Role } from './../../../models/roles.model';
import { RolesDataService } from './../../services/roles-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { RolesEditComponent } from '../roles-edit/roles-edit.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  constructor(private rolesService: RolesDataService, public dialog: MatDialog) { }

  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'claimsAmount'];

  roles: Role[];

  ngOnInit() {
    this.rolesService.getRoles().subscribe((roles:Role[]) => {
      this.roles = roles;
      this.dataSource = new MatTableDataSource(this.roles.map(role => ({
        name: role.name,
        claimsAmount: role.claims.length,
        role: role
      })));
      this.dataSource.sort = this.sort;
    });
  }

  openDialog(role: Role) {
    const dialogRef = this.dialog.open(RolesEditComponent, { 
      data: role
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
