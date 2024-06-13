import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { API_ENDPOINT } from 'src/enviroments/environment';

@Injectable({
    providedIn: 'root'
})
export class homeService {
    private SERVER = API_ENDPOINT;

    constructor(public http: HttpClient) { }


    getSubscription(id: string) {
        return this.http.get(this.SERVER + '/suscription/payment/' + id).pipe(
            map(data => {
                return data
            })
        )
    }
    getCronograma(id: string) {
        return this.http.get(this.SERVER + '/payment/schedule/vouchers/' + id + '/1').pipe(
            map(data => {
                return data
            })
        )
    }

    checkPay() {

    }


}

