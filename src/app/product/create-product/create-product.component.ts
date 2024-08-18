import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from 'src/app/common/userService/user.service';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;
  productId: any;

  constructor(
    private prodServ: ProductService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    public commServ: UserService
  ) {
    this.productForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl('', Validators.required),
      version: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      isActive: new FormControl(false),
    });
  }

  ngOnInit(): void {
    this.checkUrlForId();
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      if (this.productForm.value.id != null) {
        const product = {
          id: this.productForm.value.id,
          name: this.productForm.value.name,
          version: this.productForm.value.version,
          description: this.productForm.value.description,
          isActive: true,
        };
        // Update existing product
        this.prodServ.updateProductService(product).subscribe({
          next: (value) => {
            this.toastr.success('Product Updated Successfully!');
            this.router.navigate(['/products']);
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {},
        });
      } else {
        const product = {
          name: this.productForm.value.name,
          version: this.productForm.value.version,
          description: this.productForm.value.description,
          isActive: true,
        };
        // Create new product
        this.prodServ.genProductService(product).subscribe({
          next: (value) => {
            this.toastr.success('Product Created Successfully!');
            this.router.navigate(['/products']);
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {},
        });
      }
    } else {
      console.log('Form is invalid');
    }
  }

  getProductById(productId: string): void {
    if (productId) {
      const prodcut = this.commServ.products.filter(
        (x: Product) => x.id.toString() == productId
      );

      this.productForm.controls['id'].setValue(prodcut[0].id);
      this.productForm.controls['name'].setValue(prodcut[0].name);
      this.productForm.controls['version'].setValue(prodcut[0].version);
      this.productForm.controls['description'].setValue(prodcut[0].description);
    }
  }

  checkUrlForId(): void {
    // Get the 'id' parameter from the route
    const id = this.route.snapshot.paramMap.get('id');

    // If 'id' exists, run the function
    if (id) {
      this.getProductById(id);
    }
  }
}
