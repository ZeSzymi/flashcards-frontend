import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {
    constructor(protected http: HttpClient) {}

    post(url: string, body:any, queryParams?: any): any {
        return this.http.post(`${environment.backendUrl}${url}`, body);
    }

    delete(url: string, body:any, queryParams?: any): any {
        return this.http.delete(`${environment.backendUrl}${url}`, body);
    }

    put(url: string, body:any, queryParams?: any): any {
        return this.http.put(`${environment.backendUrl}${url}`, body);
    }

    get(url: string, queryParams?: any, headers?: HttpHeaders): any {
        return this.http.get(`${environment.backendUrl}${url}`);
    }

}