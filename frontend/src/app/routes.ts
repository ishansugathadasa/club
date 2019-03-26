import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CustomerComponent } from './user/customer/customer.component';
import { LoginComponent } from './login/login.component';
import { MainviewComponent } from './user/customer/mainview/mainview.component';
import { ReservationComponent } from './user/customer/mainview/reservation/reservation.component';
import { AdminComponent } from './user/admin/admin.component';
import { AboutusComponent } from './user/customer/mainview/aboutus/aboutus.component';
export const appRoutes: Routes = [
    {
        path: 'customer', component: UserComponent,
        children: [{ path: '', component: CustomerComponent }]
    },
    {
        path: 'admin', component: UserComponent,
        children: [{ path: '', component: AdminComponent }]
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
        path: 'aboutus', component: AboutusComponent
       
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
       
    }
];