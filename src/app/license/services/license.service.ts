import { Injectable } from '@angular/core';
import { ApiServiceService } from 'src/app/common/apiService/api-service.service';

@Injectable({
  providedIn: 'root',
})
export class LicenseService {
  constructor(private apiServ: ApiServiceService) {}

  genLicenseService(request: any) {
    return this.apiServ.apiEndPoint('Licenses', 'POST', request, false);
  }

  getLicenses() {
    return this.apiServ.apiEndPoint('Licenses', 'GET', false);
  }

  activateLicenseService(request: any) {
    return this.apiServ.apiEndPoint(
      'Licenses/activate',
      'POST',
      request,
      false
    );
  }

  deleteLicenseService(request: any) {
    return this.apiServ.apiEndPoint('Licenses', 'DELETE', request, false);
  }
}
