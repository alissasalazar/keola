import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { API_ENDPOINT } from 'src/enviroments/environment';

@Injectable({
    providedIn: 'root'
})
export class loginService {
    private SERVER = API_ENDPOINT;

    constructor(public http: HttpClient) { }


    login(data: {
        "username": string,
        "password": string
    }) {
        return this.http.post(this.SERVER + '/token', data).pipe(
            map(data => {
                return data
            })
        )
    }





}

