import { Component, OnInit } from '@angular/core';
import { Coffee } from '../models/coffee';
import { CoffeesService } from '../services/coffees.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  public items: Coffee[];
  // public coffeeKeys: any;

  constructor(private coffeesService: CoffeesService) { }

  ngOnInit(): void {
    let coffeeString = localStorage.getItem('items');

      if (coffeeString !== null) {

      this.items = JSON.parse(coffeeString);

     
    }
  }
    deleteItem(index: number) {

        this.items.splice(index, 1);
        localStorage.setItem("items", JSON.stringify(this.items))

    }

    checkoutOrder() {
      let coffeeIds = [];

      for (let key in this.items) {
        coffeeIds.push(this.items[key].coffee_id);
        console.log(this.items[key].coffee_id);
      }
      this.coffeesService.postOrder(coffeeIds).subscribe(response => {
        // If statement needs to be created. Response needed from backened confirming order received then below actions can be taken.
        this.items = [];
        localStorage.setItem('items', "[]");
      },
      )
    }
  
}