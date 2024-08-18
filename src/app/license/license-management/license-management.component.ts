import { Component, OnInit } from '@angular/core';
import { LicenseService } from '../services/license.service';
import { licenseInterface } from 'src/app/interfaces/license.interface';
import { UserService } from 'src/app/common/userService/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-license-management',
  templateUrl: './license-management.component.html',
  styleUrls: ['./license-management.component.css'],
})
export class LicenseManagementComponent implements OnInit {
  /**
   *
   */
  constructor(
    private licenseServ: LicenseService,
    private commServ: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getLicenses();
  }

  licenses: licenseInterface[] = [];

  activateLicense(obj: any) {
    let req = {
      userId: obj.userId,
      Key: obj.key,
    };
    this.licenseServ.activateLicenseService(req).subscribe({
      next: (value) => {
        this.toastr.success('License Activated Successfully!');
        this.getLicenses();
      },
      error: (err) => {},
      complete: () => {},
    });
  }

  // deleteLicense(obj: any) {
  //   let req = {
  //     userId: this.commServ.userData.Id,
  //     Key: obj.key,
  //   };
  //   this.licenseServ.deleteLicenseService(req).subscribe({
  //     next: (value) => {
  //       this.toastr.success('License Activated Successfully!');
  //       this.getLicenses();
  //     },
  //     error: (err) => {},
  //     complete: () => {},
  //   });
  // }

  getLicenses() {
    this.licenseServ.getLicenses().subscribe({
      next: (value: any) => {
        this.licenses = value.response;
      },
      error: (err) => {},
      complete: () => {
        if (this.commServ.userData.role == 'user') {
          this.licenses = this.licenses.filter(
            (x: any) => x.userId == this.commServ.userData.Id
          );
        }
      },
    });
  }
}
