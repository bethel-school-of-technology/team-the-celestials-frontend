import { Component, OnInit } from '@angular/core';
import { Coffee } from '../models/coffee';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public items: Coffee[];
  public itemsInCart: number;

  constructor() {setInterval(this.listCartnumber.bind(this), 500)}

  ngOnInit(): void {

    //Pulls string of coffees from local storage and transforms it to an object to be looped through
    let coffeeString = localStorage.getItem('items');

      if (coffeeString !== null) {

      this.items = JSON.parse(coffeeString);

      this.itemsInCart = this.items.length
    }
  }

  //Finds the number of coffees in cart so matBadge can display number of items in cart
  listCartnumber() {
    let coffeeString = localStorage.getItem('items');

      if (coffeeString !== null) {

      this.items = JSON.parse(coffeeString);

      this.itemsInCart = this.items.length
      }
  } 

}