import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from '@angular/material/input';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { CoffeesService } from './services/coffees.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderProfileComponent } from './order-profile/order-profile.component';

import { UserService } from './services/user.service';
import { FilterPipe } from './filter.pipe';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    LoginPageComponent,
    FooterPageComponent,
    SignupPageComponent,
    CheckOutComponent,
    OrderProfileComponent,
    FilterPipe,
  ],

  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatExpansionModule,
    AppRoutingModule,
    MatInputModule,
    FontAwesomeModule,
    MatBadgeModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    AuthGuardService,
    UserService,
    CoffeesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(library: FaIconLibrary) {
      library.addIcons(
        faTwitter,
        faFacebook,
        faInstagram
      );
  }
}
