import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private BASE_URL = 'https://localhost:7114/api'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  loginServ(object: any) {
    let request = {
      email: object.email,
      password: object.password,
    };
    return this.http.post(`${this.BASE_URL}/Auth/login`, request);
  }
}
