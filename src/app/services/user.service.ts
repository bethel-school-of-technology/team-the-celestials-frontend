import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
    myUserUrl: string ="http://localhost:3000/users"
    

    constructor(private http: HttpClient) { }
  
    getOneUser(userID: number): Observable<User>{
    return this.http.get<User>(`${this.myUserUrl}/${userID}`)
    }
      
    getAll() {
        return this.http.get<User[]>('/api/users');
    }

    /**getById(id: number) {
        return this.http.get('/api/users/' + id);
    } **/

    create(user: User) {
        return this.http.post('/api/users', user);
    }

    /** update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }**/

   /** delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }**/
}