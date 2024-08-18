import { Injectable } from '@angular/core';
import { ApiServiceService } from 'src/app/common/apiService/api-service.service';
import { UserService } from 'src/app/common/userService/user.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(
    private apiServ: ApiServiceService,
    private userService: UserService
  ) {}

  registerUser(request: any) {
    let body = {
      email: request.email,
      userName: request.userName,
      password: request.password,
      firstName: request.firstName,
      lastName: request.lastName,
      phoneNumber: request.phoneNumber,
      role: request.role,
    };
    return this.apiServ.apiEndPoint('Auth/register', 'POST', body, false);
  }

  getAllUsersService() {
    return this.apiServ.apiEndPoint('Users', 'GET', false);
  }

  getUserByIdService() {
    return this.apiServ.apiEndPoint(
      `Users/${this.userService.userData.Id}`,
      'GET',
      false
    );
  }
}
