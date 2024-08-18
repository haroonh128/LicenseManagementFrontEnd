import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';
import { UserService } from '../common/userService/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.initialForm();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
      this.loginService.loginServ(this.loginForm.getRawValue()).subscribe({
        next: (value: any) => {
          console.log(value);
          const helper = new JwtHelperService();

          const decodedToken = helper.decodeToken(value.response);
          this.userService.userData = decodedToken;
          console.log(this.userService.userData);
          localStorage.setItem('token', value.response);
          this.userService.checkUrlSegment();
          this.router.navigate(['/dashboard']);
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

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  initialForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
}
