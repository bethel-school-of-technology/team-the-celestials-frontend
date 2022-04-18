import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login-page/login-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderProfileComponent } from './order-profile/order-profile.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    LoginComponent,
    FooterPageComponent,
    SignupPageComponent,
    CheckOutComponent,
    OrderProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
