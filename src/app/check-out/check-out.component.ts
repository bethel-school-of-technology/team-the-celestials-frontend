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

    //Takes coffees in LocalStorage and changes them to an array of objects ot be displayed when page is loaded
    let coffeeString = localStorage.getItem('items');

      if (coffeeString !== null) {

      this.items = JSON.parse(coffeeString);     
    }
  }

  // Slices object from array and sends updated updated coffee card list back to LocalStorage
  deleteItem(index: number) {
      this.items.splice(index, 1);
      localStorage.setItem("items", JSON.stringify(this.items))
  }

    // Sends coffee id's to backend when customer checks out
    checkoutOrder() {
      let coffeeIds = [];

      for (let key in this.items) {
        coffeeIds.push(this.items[key].coffee_id);
        console.log(this.items[key].coffee_id);
      }
      this.coffeesService.postOrder(coffeeIds).subscribe(response => {
        // If statement needs to be created. Response needed from backened confirming order received then below actions can be taken.
        console.log(response);
      })
      this.items = [];
      localStorage.setItem('items', "[]");
    }
  
}