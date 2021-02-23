import { Role } from './roles.model';
export  class UserList {

  id: string;
  username: string;
  displayName: string;
  email: string;
  roles: Role[];

}
