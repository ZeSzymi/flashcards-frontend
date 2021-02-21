import { HttpService } from './../../services/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesDataService extends HttpService {

  getRoles() {
    return this.get('roles/roles');
  }

  getClaims() {
    return this.get('roles/claims');
  }

  addRole(role) {
    return this.post('roles/role-with-claims', role)
  }

}
