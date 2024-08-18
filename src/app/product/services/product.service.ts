import { Injectable } from '@angular/core';
import { ApiServiceService } from 'src/app/common/apiService/api-service.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private apiServ: ApiServiceService) {}

  genProductService(request: any) {
    return this.apiServ.apiEndPoint('Products', 'POST', request, false);
  }

  getProducts() {
    return this.apiServ.apiEndPoint('Products', 'GET', false);
  }

  updateProductService(request: any) {
    return this.apiServ.apiEndPoint(
      `Products/${request.id}`,
      'PUT',
      request,
      false
    );
  }

  deleteProductService(id: any) {
    return this.apiServ.apiEndPoint(`Products/${id}`, 'DELETE', false);
  }
}
