import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicenseManagementComponent } from './license-management/license-management.component';
import { LicenseGenerationComponent } from './license-generation/license-generation.component';

const routes: Routes = [
  { path: '', component: LicenseManagementComponent },
  { path: 'generateLicense', component: LicenseGenerationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicenseRoutingModule {}
