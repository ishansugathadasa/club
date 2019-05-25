import { Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ImageComponent } from './pages/image/image.component';


export const appRoutes: Routes = [
    {
        path: 'dashboard', component: PagesComponent,
        children: [{ path: '', component: DashboardComponent }]
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