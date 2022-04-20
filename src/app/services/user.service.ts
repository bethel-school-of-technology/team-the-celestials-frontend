import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  myUserUrl: string ="http://localhost:3000/user"
  constructor(private http: HttpClient) { }
  getOneUser(reqID: number): Observable<User>{
    return this.http.get<User>(`${this.myUserUrl}/${reqID}`)
  }
}
