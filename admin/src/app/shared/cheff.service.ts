import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Cheff } from './cheff.model';

@Injectable({
  providedIn: 'root'
})
export class CheffService {
  selectCheff: Cheff;
  ceff: Cheff[];
  readonly baseURL='http://localhost:3000/register_cheff';
  constructor(private http: HttpClient) { }
  userpostCheff(ins: Cheff){
    return this.http.post(this.baseURL,ins);
}
}
