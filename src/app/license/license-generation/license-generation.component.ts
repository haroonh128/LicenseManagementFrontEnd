import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/common/userService/user.service';
import { licenseInterface } from 'src/app/interfaces/license.interface';
import { RegisterService } from 'src/app/users/services/register.service';
import { LicenseService } from '../services/license.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product/services/product.service';

@Component({
  selector: 'app-license-generation',
  templateUrl: './license-generation.component.html',
  styleUrls: ['./license-generation.component.css'],
})
export class LicenseGenerationComponent {
  licenseForm: FormGroup;

  constructor(
    public commServ: UserService,
    private userServ: RegisterService,
    private licenseServ: LicenseService,
    private toastr: ToastrService,
    private router: Router,
    private prodServ: ProductService
  ) {
    this.licenseForm = new FormGroup({
      productId: new FormControl('', Validators.required),
      userId: new FormControl('', Validators.required),
      isActive: new FormControl(false),
    });
  }

  ngOnInit(): void {
    this.getProducts();
    this.getUsers();
  }

  onSubmit(): void {
    if (this.licenseForm.valid) {
      const newLicense: licenseInterface = {
        id: 0, // Typically, the ID would be assigned by the backend.
        key: this.licenseForm.value.key,
        productId: this.licenseForm.value.productId,
        userId: this.licenseForm.value.userId,
        createdDate: new Date(),
        modifiedDate: new Date(),
        isActive: this.licenseForm.value.isActive,
        isDeleted: false,
      };

      console.log('License Created:', newLicense);
      this.licenseServ.genLicenseService(newLicense).subscribe({
        next: (value) => {
          this.toastr.success('Licesnse Generated Successfully');
          this.licenseForm.reset();
          this.router.navigate(['licenseManagement']);
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

  getUsers() {
    this.userServ.getAllUsersService().subscribe({
      next: (value: any) => {
        this.commServ.users = value.response;
      },
      error: (err) => {},
      complete: () => {
        if (this.commServ.userData.role == 'user') {
          this.commServ.users = this.commServ.users.filter(
            (x: any) => x.Id == this.commServ?.userData?.Id
          );
        }
      },
    });
  }

  getProducts() {
    this.prodServ.getProducts().subscribe({
      next: (value: any) => {
        this.commServ.products = value.response;
      },
      error: (err) => {},
      complete: () => {},
    });
  }
}
