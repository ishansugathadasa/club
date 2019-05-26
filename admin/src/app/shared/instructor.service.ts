import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Instructor } from './instructor.model';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  selectInstructor: Instructor;
  instructor: Instructor[];
  readonly baseURL='http://localhost:3000/register_instructor';
  constructor(private http: HttpClient) { }
  userpostInstructor(ins: Instructor){
    return this.http.post(this.baseURL,ins);
}

}
