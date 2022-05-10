import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdminSignInComponent } from './admin/admin-sign-in/admin-sign-in.component';
import { AdminComponent } from './admin/admin-sign-up/admin.component';
import { CreateComponent } from './admin/adminCreate/create/create.component';

const routes: Routes = [
  { path: 'accueil', component: AcceuilComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'sign-in', component: AdminSignInComponent },
  { path: 'app-create',component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
