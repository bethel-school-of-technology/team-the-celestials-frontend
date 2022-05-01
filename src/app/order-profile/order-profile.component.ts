
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Order } from '../models/order';
import { UserService } from '../services/user.service';
import { CoffeesService } from '../services/coffees.service';
import { ActivatedRoute, Router } from '@angular/router';


export class ButtonTypesExample {}
@Component({
  selector: 'app-order-profile',
  templateUrl: './order-profile.component.html',
  styleUrls: ['./order-profile.component.css']
})
export class OrderProfileComponent implements OnInit {

 
    // Property to store current user Info
    public currentUser: User = new User();
    userID: number | any;
    public orders: Order[];

    constructor(private actRoute: ActivatedRoute, private myUserService: UserService, private router: Router, private coffeesService: CoffeesService) { }
   
    ngOnInit(): void {

      let userString = localStorage.getItem('user');

      if (userString !== null) {
        this.currentUser = JSON.parse(userString);
      }

      // This calls the coffee service to get orders for user.
      this.coffeesService.getOrders().subscribe( response => {
        this.orders = response;
      })
    }

    // This sends to the the user service to delete the user account.
    removeUser() {
      this.myUserService.deleteUser().subscribe(response => {
        console.log(response);
      })
    }

    // This sends the updated user info to the user service.
    saveUser(firstName:string, lastName:string, email:string, phoneNumber:number) {
      this.myUserService.editUser(firstName, lastName, email, phoneNumber).subscribe(response => {
        console.log(response);
      })
    }



}



