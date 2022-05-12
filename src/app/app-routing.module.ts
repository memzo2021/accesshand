import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdminFilterComponent } from './admin/admin-filter/admin-filter.component';
import { AdminComponent } from './admin/admin-sign-up/admin.component';
import { MyStationsComponent } from './admin/admin-stations/my-stations/my-stations.component';
import { CreateComponent } from './admin/adminCreate/create/create.component';
import { SignInComponent } from './admin/admin_sign-In/sign-in/sign-in.component';
import { NotFoundComponent } from './pages/not-found/not-found/not-found.component';

const routes: Routes = [
  { path: 'accueil', component: AcceuilComponent },
  { path: 'admin', component: AdminComponent },
  
  { path: 'app-create', component: CreateComponent },
  { path: 'app-admin-filter', component: AdminFilterComponent },
  { path: 'app-my-stations', component: MyStationsComponent },
  {path:'app-sign-in',component:SignInComponent},
  {path:'**',component:NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
