import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { ImageComponent } from './pages/image/image.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ComponentsComponent } from './pages/components/components.component';
import { SidebarComponent } from './pages/components/sidebar/sidebar.component';
import { NavbarComponent } from './pages/components/navbar/navbar.component';
import { BreadcrumbComponent } from './pages/components/breadcrumb/breadcrumb.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent,
    ImageComponent,
    DashboardComponent,
    ComponentsComponent,
    SidebarComponent,
    NavbarComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
