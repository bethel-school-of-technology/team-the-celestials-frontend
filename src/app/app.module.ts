import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderProfileComponent } from './order-profile/order-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    LoginPageComponent,
    FooterPageComponent,
    SignupPageComponent,
    CheckOutComponent,
    OrderProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
