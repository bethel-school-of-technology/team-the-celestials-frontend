import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Coffee } from '../models/coffee';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  private coffeesRoute = 'http://localhost:3000/coffee';
  public coffees: Coffee[];

  constructor(private http: HttpClient) { }

  getCoffees() {
    this.http.get<Coffee[]>(this.coffeesRoute).subscribe(coffees => {
        this.coffees = coffees;
        console.log('Coffees', this.coffees);
    });
  }

  ngOnInit(): void {
    this.getCoffees();
  }

}
