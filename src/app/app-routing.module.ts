import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule,Routes } from '@angular/router';
import { OrderProfileComponent } from './order-profile/order-profile.component';



const routes: Routes = [
  {
    path: 'user',
    component: OrderProfileComponent
},


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
