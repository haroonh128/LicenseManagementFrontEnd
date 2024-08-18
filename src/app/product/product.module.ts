import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [CreateProductComponent, ProductGridComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
})
export class ProductModule {}
