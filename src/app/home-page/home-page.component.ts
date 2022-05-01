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
      this.coffees = response;
    })
  }

    addItemToCart(coffee: Coffee){
      const localStorageContent = localStorage.getItem('items');

      let items;
      if (localStorageContent === null ) {
        items = [];
      }
      else {
        items = JSON.parse(localStorageContent);
      }

      items.push(coffee);

      localStorage.setItem('items', JSON.stringify(items));

    }

  }
