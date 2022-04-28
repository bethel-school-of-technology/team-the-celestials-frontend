import { Component, OnInit } from '@angular/core';
import { Coffee } from '../models/coffee';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  public items: Coffee[];

  constructor() { }

  ngOnInit(): void {
    let coffeeString = localStorage.getItem('items');

      if (coffeeString !== null) {

      this.items = JSON.parse(coffeeString);

      let coffeeIds = [];

      for (let key in this.items) {
        coffeeIds.push(this.items[key].coffee_id);
        // console.log(this.items[key].coffee_id);
      }

      console.log(coffeeIds);

    }
  }
  
  deleteItems() {
    localStorage.removeItem('items');
    this.items = [];
    // this.items = localStorage.getItem('items');
  }
}