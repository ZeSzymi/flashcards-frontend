import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {
    constructor(protected http: HttpClient) {}

    protected post(url: string, body:any, queryParams?: any) {
        return this.http.post(`${environment.backendUrl}${url}`, body);
    }

    protected delete(url: string, body:any, queryParams?: any) {
        return this.http.delete(`${environment.backendUrl}${url}`, body);
    }

    protected put(url: string, body:any, queryParams?: any) {
        return this.http.put(`${environment.backendUrl}${url}`, body);
    }

    protected get(url: string, queryParams?: any, headers?: HttpHeaders) {
        return this.http.get(`${environment.backendUrl}${url}`);
    }

}