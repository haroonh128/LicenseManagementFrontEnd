import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LicenseRoutingModule } from './license-routing.module';
import { LicenseGenerationComponent } from './license-generation/license-generation.component';
import { LicenseManagementComponent } from './license-management/license-management.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LicenseGenerationComponent, LicenseManagementComponent],
  imports: [CommonModule, LicenseRoutingModule, ReactiveFormsModule],
})
export class LicenseModule {}
