import { Injectable } from '@angular/core';
import { Coffee } from '../models/coffee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeesService {
  private coffeesRoute = 'http://localhost:3000/coffees';
  private postOrderRoute = 'http://localhost:3000/coffees/order';

  constructor(private http: HttpClient) { }

  // Get's coffees from backend
  getCoffees(): Observable<Coffee[]>{
    return this.http.get<Coffee[]>(this.coffeesRoute)
  }

  // Post order to backend
  postOrder(coffeeIds: number[]): Observable<Coffee[]>{
    return this.http.post<Coffee[]>(this.postOrderRoute, {coffeeIds: coffeeIds})
  }
  
}
