import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './content/users/home/home.component';
import { AboutComponent } from './content/users/about/about.component';
import { BookingComponent } from './content/users/booking/booking.component';
import { ContactComponent } from './content/users/contact/contact.component';
import { DeliveryComponent } from './content/users/delivery/delivery.component';
import { LoginComponent } from './content/users/authenticate/login/login.component';
import { SignupComponent } from './content/users/authenticate/signup/signup.component';
import { MenuComponent } from './content/users/menu/menu.component';
import { AddToCartComponent } from './content/users/delivery/add-to-cart/add-to-cart.component';
import { AdminComponent } from './content/admin/admin.component';
import { AdminLoginComponent } from './content/admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './content/admin/admin-dashboard/admin-dashboard.component';
import { AdminUserComponent } from './content/admin/admin-dashboard/user-info/admin-user.component';
import { AdminOrderStatusComponent } from './content/admin/admin-dashboard/order-status/order-status.component';
import { TodaySpecialComponent } from './content/admin/admin-dashboard/today-special/today-special.component';
import { UsersComponent } from './content/users/users.component';
import { environment } from '../environments/environment';
import { AuthService } from './content/services/auth.service';
import { UserService } from './content/services/user.service';
import { ToastrModule } from 'ngx-toastr';

// Firebase imports

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireStorageModule, BUCKET} from '@angular/fire/storage'
import {AngularFireDatabaseModule} from '@angular/fire/database'
import { AngularFireAuthModule } from "@angular/fire/auth";
import { ForgotPasswordComponent } from './content/users/authenticate/forgot-password/forgot-password.component';
import { UserProfileComponent } from './content/users/user-profile/user-profile.component';
import { VerifyEmailComponent } from './content/users/authenticate/verify-email/verify-email.component';
import { PaymentComponent } from './payment/payment.component';
import { AddressComponent } from './content/users/user-profile/address/address.component';
import { EditAddressComponent } from './content/users/user-profile/address/edit-address/edit-address.component';
import { AddAddressComponent } from './content/users/user-profile/address/add-address/add-address.component';
import { OrdersComponent } from './content/users/user-profile/orders/orders.component';

@NgModule({
  declarations: [
    UsersComponent,
    AppComponent,
    HomeComponent,
    AboutComponent,
    BookingComponent,
    ContactComponent,
    DeliveryComponent,
    LoginComponent,
    SignupComponent,
    MenuComponent,
    AddToCartComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminUserComponent,
    AdminOrderStatusComponent,
    TodaySpecialComponent,
    ForgotPasswordComponent,
    UserProfileComponent,
    VerifyEmailComponent,
    PaymentComponent,
    AddressComponent,
    EditAddressComponent,
    AddAddressComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ToastrModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ UserService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }