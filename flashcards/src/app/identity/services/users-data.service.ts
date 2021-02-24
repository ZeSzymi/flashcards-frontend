import { HttpService } from './../../services/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class UsersDataService extends HttpService {

  getUsers() {
    return this.get('users');
  }

  addRolesToUser(userWithRoles) {
    return this.post('users/roles', userWithRoles)
  }

}
