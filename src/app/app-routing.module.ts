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
import { AdminOrderStatusComponent } from './content/admin/admin-dashboard/order-status/order-status.component';
import { TodaySpecialComponent } from './content/admin/admin-dashboard/today-special/today-special.component';
import { UsersComponent } from './content/users/users.component';



const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: 'users', component: UsersComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'booking', component: BookingComponent },
      { path: 'delivery', component: AddToCartComponent },
      { path: 'order', component: DeliveryComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent }
    ]
  },

  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: AdminLoginComponent },
      {
        path: 'dashboard', component: AdminDashboardComponent,
        children: [
          { path: '', redirectTo: 'order', pathMatch: 'full' },
          { path: 'user', component: AdminUserComponent },
          { path: 'order', component: AdminOrderStatusComponent },
          { path: 'today-special', component: TodaySpecialComponent }
        ]
      },

    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
