import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent {
  registrationForm: FormGroup;

  constructor(private resgSer: RegisterService, private toastr: ToastrService) {
    this.registrationForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl(''),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted!', this.registrationForm.value);
      this.resgSer.registerUser(this.registrationForm.getRawValue()).subscribe({
        next: (value) => {
          console.log(value);
          this.toastr.success('User Registered successfully!');
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {},
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
