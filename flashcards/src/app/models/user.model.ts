export  class User {

    id: string;
    username: string;
    login: string;
    email: string;
    privileges: string[];

    constructor(id?: string, username?: string, login?: string, email?: string, privileges?: string[]) {
        this.id = id;
        this.username = username;
        this.login = login;
        this.email = email;
        this.privileges = privileges;
    }
}