import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductGridComponent } from './product-grid/product-grid.component';

const routes: Routes = [
  { path: '', component: ProductGridComponent },

  { path: 'createProduct', component: CreateProductComponent },
  { path: 'createProduct/:id', component: CreateProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
