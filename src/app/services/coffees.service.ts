import { Injectable } from '@angular/core';
import { Coffee } from '../models/coffee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeesService {
  private coffeesRoute = 'http://localhost:3000/coffees';

  constructor(private http: HttpClient) { }
  getCoffees(): Observable<Coffee[]>{
    return this.http.get<Coffee[]>(this.coffeesRoute)
  }
}