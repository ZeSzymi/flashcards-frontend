import { HttpService } from './http.service';
import * as moment from "moment";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs/operators';
import { User } from  '../models/user.model';
import jwt_decode from "jwt-decode";

@Injectable({
    providedIn: 'root',
})
export class AuthService extends HttpService {


    constructor(http: HttpClient) {
        super(http);
        this.setUser();
    }

    private _user: User = null;
    private _expiration: moment.Moment = null;
    public get user() {
        return this._user;
    }

    register(username: string, email: string, password: string) {
        return this.post(`identity/register`, { username, email, password });
    }

    getToken(): string {
        return localStorage.getItem('id_token');
    }

    login(username:string, password:string) {
        return this.post('identity/login', {username, password}).pipe(
            tap((res: any) => this.setSession(res.token)),
            shareReplay()
        )
    }

    setSession(token) {
        const { exp } = this.decode(token);
        this._expiration = moment().add(exp,'second');
        localStorage.setItem('id_token', token);
        localStorage.setItem("expires_at", JSON.stringify(this._expiration.valueOf()));
        this.isLoggedIn();
    }
    
    private decode(token) {
        const decoded = <any>jwt_decode(token)
        const { id, displayName, privileges, username, email, exp } = decoded
        console.log(displayName);
        this._user = new User(id as any, displayName, username, email, privileges);
        return decoded;
    }

    setUser() {
        const token = localStorage.getItem("id_token");
        if (token !== null && token !== '') {
           this.decode(token);
        }
    }

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        this._expiration = null;
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        if (this._expiration == null) {
            const expiration = localStorage.getItem("expires_at");
            const expiresAt = JSON.parse(expiration);
            this._expiration = moment(expiresAt);
        }
        
        return this._expiration;
    }    
}