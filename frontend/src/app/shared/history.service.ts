import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { History } from './history.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  selectHistory: History;
  history: History[];
  readonly baseURL='http://localhost:3000/view_history';
  constructor(private http: HttpClient) { }
  
  getHistoryList(){
    return this.http.get(this.baseURL);
}



}
