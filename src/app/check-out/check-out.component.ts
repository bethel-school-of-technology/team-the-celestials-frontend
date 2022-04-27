import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  public items: any;
  public order = "";

  constructor() { }

  ngOnInit(): void {
    this.items = localStorage.getItem('items');

    for (var key in this.items) {
      if (this.items.hasOwnProperty(key)) {
          console.log(key + " -> " + this.items[key]);
      }
    }
  }
}