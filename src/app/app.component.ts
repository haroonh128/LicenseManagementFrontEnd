import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from './common/userService/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck {
  title = 'licenseManagementFrontEnd';
  token: any;
  urlSegment: string = '';
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token')?.toString();
  }

  ngDoCheck(): void {
    this.token = localStorage.getItem('token')?.toString();
  }
}
