import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  public user: User = new User();

  constructor(private AuthService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  goToLogin() {
    this.router.navigate(['./login']);
  }

  public register() {
    console.log('Register Method called');
    this.AuthService.register(this.user).subscribe((response: any) => {
      console.log(response);
      this.user = response;
    })
    this.router.navigate(['login']);
  }
}