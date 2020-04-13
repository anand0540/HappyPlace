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
import { AdminLoginComponent } from './content/admin/admin-login/admin-login.component';
import { AdminComponent } from './content/admin/admin.component';
import { AdminDashboardComponent } from './content/admin/admin-dashboard/admin-dashboard.component';
import { AdminUserComponent } from './content/admin/admin-dashboard/user-info/admin-user.component';
import { AdminOrderStatusComponent } from './content/admin/admin-dashboard/order-status/admin-order-status.component';



const routes: Routes = [
  {path:'user', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'user/about', component:AboutComponent},
  {path:'user/booking', component:BookingComponent},
  {path:'user/delivery', component:AddToCartComponent},
  {path:'user/order', component:DeliveryComponent},
  {path:'user/menu', component:MenuComponent},
  {path:'user/contact', component:ContactComponent},
  {path:'user/signup', component:SignupComponent},
  {path:'user/login', component:LoginComponent},
  // {path:'admin', component:AdminComponent},
  {path:'admin/login', component:AdminLoginComponent},
  {path:'admin/dashboard', component:AdminDashboardComponent},
  {path:'admin/user', component:AdminUserComponent},
  {path:'admin/order', component: AdminOrderStatusComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
