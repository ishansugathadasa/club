import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CustomerComponent } from './user/customer/customer.component';
import { LoginComponent } from './login/login.component';
export const appRoutes: Routes = [
    {
        path: 'customer', component: UserComponent,
        children: [{ path: '', component: CustomerComponent }]
    },
    {
        path: 'login', component: LoginComponent
       
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
       
    }
];