import { MatTableDataSource } from '@angular/material/table';
import { UsersDataService } from './../../services/users-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserList } from 'src/app/models/user-list.model';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'email', 'roles'];

  users: UserList[] = []

  constructor(private _usersService: UsersDataService) { }

  ngOnInit() {
    this._usersService.getUsers().subscribe((users: UserList[]) => {
      this.users = users
      this.dataSource = new MatTableDataSource(this.users.map(user => ({
        name: user.displayName,
        email: user.email,
        roles: user.roles
      })));
      this.dataSource.sort = this.sort;
    })
  }

}
