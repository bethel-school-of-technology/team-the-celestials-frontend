import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user: User = new User();

  userData: User = new User();
  

  constructor(private router: Router, private service: AuthService) { }

  ngOnInit(): void {

    /**Home page for Huck
    let myToken = localStorage.getItem("userToken");

    this.service.getProfile(myToken).subscribe(response => {
      this.userData = response;
    })*/

  }
  goToSignUp() {
    this.router.navigate(['./signup']);
  }
  goToLogin() {
    console.log('here');

    this.service.login(this.user.email, this.user.password).subscribe((response) => {
      console.log(response);

      localStorage.setItem("userToken", JSON.stringify(response.jwt));
      localStorage.setItem("user", JSON.stringify(response.user));

      this.router.navigate(['home']);

    })

  }








}