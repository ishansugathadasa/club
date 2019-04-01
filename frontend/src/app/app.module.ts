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
import { CashierComponent } from './user/cashier/cashier.component';
import { CustomerIndexComponent } from './user/customer/customer-index/customer-index.component';
import { AboutUsComponent } from './user/customer/about-us/about-us.component';
import { ContactUsComponent } from './user/customer/contact-us/contact-us.component';
import { GalleryComponent } from './user/customer/gallery/gallery.component';
import { AboutUsContentComponent } from './user/customer/about-us/components/about-us-content/about-us-content.component';
import { AboutUsHeaderComponent } from './user/customer/about-us/components/about-us-header/about-us-header.component';
import { ContactBodyComponent } from './user/customer/contact-us/components/contact-body/contact-body.component';
import { ContactHeaderComponent } from './user/customer/contact-us/components/contact-header/contact-header.component';
import { ComponentsComponent } from './shared/components/components.component';
import { IndexNavComponent } from './shared/components/index-nav/index-nav.component';
import { ReservationComponent } from './user/customer/reservation/reservation.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { IndexServicesComponent } from './user/customer/customer-index/index-services/index-services.component';
import { IndexHeaderComponent } from './user/customer/customer-index/index-header/index-header.component';
import { IndexLinksComponent } from './user/customer/customer-index/components/index-links/index-links.component';
import { BackNavComponent } from './shared/components/back-nav/back-nav.component';
import { ResReservationComponent } from './user/cashier/res-reservation/res-reservation.component';
import { SportsComponent } from './user/cashier/sports/sports.component';
import { TableBookingComponent } from './user/cashier/table-booking/table-booking.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CustomerComponent,
    LoginComponent,
    CashierComponent,
    CustomerIndexComponent,
    AboutUsComponent,
    ContactUsComponent,
    GalleryComponent,
    AboutUsContentComponent,
    AboutUsHeaderComponent,
    ContactBodyComponent,
    ContactHeaderComponent,
    ComponentsComponent,
    IndexNavComponent,
    FooterComponent,
    ReservationComponent,
    IndexServicesComponent,
    IndexHeaderComponent,
    IndexLinksComponent,
    BackNavComponent,
    ResReservationComponent,
    SportsComponent,
    TableBookingComponent
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
