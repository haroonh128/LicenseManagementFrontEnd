import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'register',
    loadChildren: () =>
      import(`./users/users.module`).then((m) => m.UsersModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'licenseManagement',
    loadChildren: () =>
      import(`./license/license.module`).then((m) => m.LicenseModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'products',
    loadChildren: () =>
      import(`./product/product.module`).then((m) => m.ProductModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
