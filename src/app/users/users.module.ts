import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserRegistrationComponent],
  imports: [UsersRoutingModule, ReactiveFormsModule],
})
export class UsersModule {}
