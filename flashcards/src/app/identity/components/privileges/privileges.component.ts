import { MatTableDataSource } from '@angular/material/table';
import { RolesDataService } from './../../services/roles-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Claim } from 'src/app/models/roles.model';

@Component({
  selector: 'app-privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.scss']
})
export class PrivilegesComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['name'];
  claims: Claim[]

  constructor(private rolesService: RolesDataService) { }

  ngOnInit() {
    this.rolesService.getClaims().subscribe((claims: Claim[]) => {
      this.claims = claims;
      this.dataSource = new MatTableDataSource(this.claims.map(claim => ({
        name: claim.claimValue
      })));
      this.dataSource.sort = this.sort;
    });
  }

}
