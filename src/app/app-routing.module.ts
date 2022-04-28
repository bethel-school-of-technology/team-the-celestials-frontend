import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderProfileComponent } from './order-profile/order-profile.component';
import { CheckOutComponent } from './check-out/check-out.component';


import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
      path: 'home',
      component: HomePageComponent
  },
  {
    path: 'checkout',
    component: CheckOutComponent
  },
  {

    path: 'profile/:userID',
    component: OrderProfileComponent
  },
  {
        path: 'signup',
        component: SignupPageComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }