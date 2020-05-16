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
import { ForgotPasswordComponent } from './content/users/authenticate/forgot-password/forgot-password.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { SecureInnerPagesGuard } from './shared/guard/secure-inner-pages.guard';
import { UserProfileComponent } from './content/users/user-profile/user-profile.component';
import { VerifyEmailComponent } from './content/users/authenticate/verify-email/verify-email.component';
import { AdminAuthGuard } from './shared/guard/admin-auth.guard';
import { PaymentService } from './content/services/payment.service';
import { PaymentComponent } from './payment/payment.component';
import { AddressComponent } from './content/users/user-profile/address/address.component';
import { EditAddressComponent } from './content/users/user-profile/address/edit-address/edit-address.component';
import { AddAddressComponent } from './content/users/user-profile/address/add-address/add-address.component';
import { OrdersComponent } from './content/users/user-profile/orders/orders.component';



const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: 'users', component: UsersComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'booking', component: BookingComponent, canActivate: [AuthGuard] },
      { path: 'order', component: AddToCartComponent,canActivate: [AuthGuard] },
      { path: 'delivery', component: DeliveryComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
      { path: 'signup', component: SignupComponent,canActivate: [SecureInnerPagesGuard] },
      { path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard]},
      { path: 'forgot', component: ForgotPasswordComponent,canActivate: [SecureInnerPagesGuard] },
      { path: 'profile', component: UserProfileComponent,canActivate: [AuthGuard],
        children: [
          { path: '', redirectTo: 'orders', pathMatch: 'full' },
          {path: 'address', component: AddressComponent },
          {path: 'edit-address', component: EditAddressComponent },
          {path: 'add-address', component: AddAddressComponent },
          {path: 'orders', component: OrdersComponent },

        ]
      },
      { path: 'verify-email', component: VerifyEmailComponent,canActivate: [SecureInnerPagesGuard] },
      { path: 'payment', component: PaymentComponent }

    ]
  },

  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: AdminLoginComponent},
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
