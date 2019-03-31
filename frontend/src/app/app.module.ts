import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CustomerComponent } from './user/customer/customer.component';
import { LoginComponent } from './login/login.component';

//routes
import { appRoutes } from './routes';
import { MainviewComponent } from './user/customer/mainview/mainview.component';
import { ReservationComponent } from './user/customer/mainview/reservation/reservation.component';
// import { AboutusComponent } from './user/customer/mainview/aboutus/aboutus.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatGridListModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatSidenavModule,
  MatStepperModule,
  MatRadioModule
} from '@angular/material';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AdminComponent } from './user/admin/admin.component';
import { AboutusComponent } from './user/customer/mainview/aboutus/aboutus.component';
import { CashierComponent } from './user/cashier/cashier.component';
import { CashierSharedComponent } from './user/cashier/cashier-shared/cashier-shared.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CustomerComponent,
    LoginComponent,
    MainviewComponent,
    ReservationComponent,
    // AboutusComponent,
    FooterComponent,
    NavbarComponent,
    AdminComponent,
    AboutusComponent,
    CashierComponent,
    CashierSharedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatStepperModule,
    MatFormFieldModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatRadioModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
