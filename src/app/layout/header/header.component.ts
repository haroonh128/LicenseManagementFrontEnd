import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/authService/auth.service';
import { UserService } from 'src/app/common/userService/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  /**
   *
   */
  constructor(
    public authServ: AuthService,
    private router: Router,
    public commServ: UserService
  ) {}

  onLogOut() {
    this.authServ.logout();
    this.commServ.checkUrlSegment();
    this.router.navigate(['']);
  }
}
