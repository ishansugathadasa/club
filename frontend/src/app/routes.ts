import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CustomerComponent } from './user/customer/customer.component';
import { LoginComponent } from './login/login.component';
import { MainviewComponent } from './user/customer/mainview/mainview.component';
import { ReservationComponent } from './user/customer/mainview/reservation/reservation.component';
export const appRoutes: Routes = [
    {
        path: 'customer', component: UserComponent,
        children: [{ path: '', component: CustomerComponent }]
    },
    {
        path: 'login', component: LoginComponent
       
    },
    {
        path: 'mainview', component: MainviewComponent
       
    },
    {
        path: 'reservation', component: ReservationComponent
       
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
       
    }
];