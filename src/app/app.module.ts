import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { environment } from '../environments/environment';
// import { AuthService } from './services/auth.service';
import { UserService } from './content/services/user.service';
import { ToastrModule } from 'ngx-toastr';

// Firebase imports

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AdminComponent } from './content/admin/admin.component';
import { AdminLoginComponent } from './content/admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './content/admin/admin-dashboard/admin-dashboard.component';
import { AdminUserComponent } from './content/admin/admin-dashboard/user-info/admin-user.component';
import { AdminOrderStatusComponent } from './content/admin/admin-dashboard/order-status/admin-order-status.component'

@NgModule({
  declarations: [
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
    AdminOrderStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ToastrModule.forRoot()
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }