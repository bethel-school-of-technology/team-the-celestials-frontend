
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
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

    constructor(private actRoute: ActivatedRoute, private myUserService: UserService, private router: Router) { }
   
    ngOnInit(): void {

      let userString = localStorage.getItem('user');

      if (userString !== null) {
        this.currentUser = JSON.parse(userString);
      }

      // Extracted the ID from URL
      // this.userID = this.actRoute.snapshot.paramMap.get("userID");
      // console.log(this.userID);

      // // Fetch the usercorresponding to the ID
      // this.myUserService.getOneUser(this.userID).subscribe(response => {
      //   console.log(response);
      //   this.currentUser = response;
      // })
    }
  



}



