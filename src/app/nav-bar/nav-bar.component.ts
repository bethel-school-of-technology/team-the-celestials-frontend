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

  constructor() {
    setInterval(this.listCartnumber.bind(this), 500);
  }

  ngOnInit(): void {
    let coffeeString = localStorage.getItem('items');

      if (coffeeString !== null) {

      this.items = JSON.parse(coffeeString);

      this.itemsInCart = this.items.length
    }

  }
  listCartnumber() {
    let coffeeString = localStorage.getItem('items');

      if (coffeeString !== null) {

      this.items = JSON.parse(coffeeString);

      this.itemsInCart = this.items.length
      }
  } 

}