import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdminComponent } from './admin/admin-sign-up/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './admin/adminCreate/create/create.component';
import { AdminSignInComponent } from './admin/admin-sign-in/admin-sign-in/admin-sign-in.component';
import { AdminFilterComponent } from './admin/admin-filter/admin-filter.component';
import { MyStationsComponent } from './admin/admin-stations/my-stations/my-stations.component';
import { NotFoundComponent } from './pages/not-found/not-found/not-found.component';
import { SignInComponent } from './admin/admin_sign-In/sign-in/sign-in.component';
 @NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AdminComponent,
    NavbarComponent,
   
    CreateComponent,
        AdminSignInComponent,
        AdminFilterComponent,
        MyStationsComponent,
        NotFoundComponent,
        SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
