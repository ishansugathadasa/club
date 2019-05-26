import { Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ImageComponent } from './pages/image/image.component';
import { AddInstructorComponent } from './Registration/add-instructor/add-instructor.component';
import { AddCheffComponent } from './Registration/add-cheff/add-cheff.component';
import { AddCashierComponent } from './Registration/add-cashier/add-cashier.component';

export const appRoutes: Routes = [
    {
        path: 'dashboard', component: PagesComponent,
        children: [{ path: '', component: DashboardComponent }]
    },
    {
        path: 'register/instructor', component: AddInstructorComponent
        
    },
    {
        path: 'register/cheff', component: AddCheffComponent
    },
    {
        path: 'register/cashier', component: AddCashierComponent
        
    },
    {
    
        path: 'image', component: ImageComponent
       
    },
    {
        path: 'login', component: LoginComponent
       
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
       
    }
];