import { Component, OnInit } from '@angular/core';
import { Coffee } from '../models/coffee';
import { CoffeesService } from '../services/coffees.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public coffees: Coffee[];

  constructor(private coffeesService: CoffeesService) {}

  ngOnInit(): void {
    this.coffeesService.getCoffees().subscribe(response => {
      console.log(response);
      this.coffees = response;
    })
  }

    addItemToCart(nameOfCoffee:string){
      localStorage.setItem(nameOfCoffee, nameOfCoffee)
      // localStorage.clear()
    }
  }
