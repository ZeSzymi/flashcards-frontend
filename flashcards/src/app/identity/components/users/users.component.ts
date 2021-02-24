import { AuthService } from './../../../services/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { UsersDataService } from './../../services/users-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserList } from 'src/app/models/user-list.model';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Role } from 'src/app/models/roles.model';
import { UserEditComponent } from '../user-edit/user-edit.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['username', 'email', 'roles'];

  users: UserList[] = []

  constructor(private _usersService: UsersDataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this._usersService.getUsers().subscribe((users: UserList[]) => {
      this.users = users
      this.dataSource = new MatTableDataSource(this.users.map(user => ({
        id: user.id,
        username: user.displayName,
        email: user.email,
        roles: user.roles
      })));
      this.dataSource.sort = this.sort;
    })
  }

  openDialog(user: UserList) {
    const dialogRef = this.dialog.open(UserEditComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
  }

}
