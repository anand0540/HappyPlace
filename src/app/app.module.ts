import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { MenuComponent } from './menu/menu.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthService } from './authentication/authentication.service';
import { AddToCartComponent } from './delivery/add-to-cart/add-to-cart.component';

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
    AuthenticationComponent,
    AddToCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }