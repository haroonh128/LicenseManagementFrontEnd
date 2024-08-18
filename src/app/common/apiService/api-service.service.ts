import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private BASE_URL = 'https://localhost:7114/api'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  apiEndPoint<T>(
    endPoint: string = '',
    method: string = 'GET',
    data: any = null,
    token: boolean = false
  ): Observable<T> {
    let headers = new HttpHeaders();
    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    // });

    // Add the token to the headers if provided
    if (token) {
      headers = headers.set(
        'Authorization',
        `Bearer ${localStorage.getItem('token')}`
      );
    }

    let options = {
      headers: headers,
    };

    let request: Observable<any>;

    switch (method.toUpperCase()) {
      case 'POST':
        request = this.http.post(`${this.BASE_URL}/${endPoint}`, data, options);
        break;
      case 'PUT':
        request = this.http.put(`${this.BASE_URL}/${endPoint}`, data, options);
        break;
      case 'DELETE':
        request = this.http.delete(`${this.BASE_URL}/${endPoint}`, options);
        break;
      case 'GET':
      default:
        request = this.http.get(`${this.BASE_URL}/${endPoint}`, options);
        break;
    }

    return request.pipe(
      catchError((error) => {
        return throwError(error); // Directly throw the error
      })
    );
  }
}
