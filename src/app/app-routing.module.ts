import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './authenticate/signup/signup.component';
import { LoginComponent } from './authenticate/login/login.component';
import { AddToCartComponent } from './delivery/add-to-cart/add-to-cart.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'booking', component:BookingComponent},
  {path:'delivery', component:AddToCartComponent},
  {path:'order', component:DeliveryComponent},
  {path:'menu', component:MenuComponent},
  {path:'contact', component:ContactComponent},
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
