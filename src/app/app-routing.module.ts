import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './content/users/home/home.component';
import { AboutComponent } from './content/users/about/about.component';
import { BookingComponent } from './content/users/booking/booking.component';
import { AddToCartComponent } from './content/users/delivery/add-to-cart/add-to-cart.component';
import { DeliveryComponent } from './content/users/delivery/delivery.component';
import { MenuComponent } from './content/users/menu/menu.component';
import { ContactComponent } from './content/users/contact/contact.component';
import { SignupComponent } from './content/users/authenticate/signup/signup.component';
import { LoginComponent } from './content/users/authenticate/login/login.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'booking', component:BookingComponent},
  {path:'delivery', component:AddToCartComponent},
  {path:'order', component:DeliveryComponent},
  {path:'menu', component:MenuComponent},
  {path:'contact', component:ContactComponent},
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'test', component:DeliveryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
