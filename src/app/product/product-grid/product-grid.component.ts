import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/interfaces/product.interface';
import { UserService } from 'src/app/common/userService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
})
export class ProductGridComponent implements OnInit {
  /**
   *
   */
  constructor(
    private prodServ: ProductService,
    public commServ: UserService,
    private router: Router
  ) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter((product) => product.id !== productId);
    console.log(`Product ${productId} deleted`);
    this.prodServ.deleteProductService(productId).subscribe({
      next: (value: any) => {
        console.log(value);
        this.getProducts();
      },
      error: (err) => {},
      complete: () => {},
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

  updateProduct(productId: string): void {
    this.router.navigate([`products/createProduct/${productId}`]);
  }
}
