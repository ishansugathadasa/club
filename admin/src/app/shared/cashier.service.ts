import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Cashier } from './cashier.model';

@Injectable({
  providedIn: 'root'
})
export class CashierService {
  selectCashier: Cashier;
  cashier: Cashier[];
  readonly baseURL='http://localhost:3000/register_cashier';
  constructor(private http: HttpClient) { }
  userpostCashier(ins: Cashier){
    return this.http.post(this.baseURL,ins);
}
}
