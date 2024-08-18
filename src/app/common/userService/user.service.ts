import { Injectable } from '@angular/core';
import { userInterface } from '../userInterface/user.interface';
import { user } from 'src/app/interfaces/user.interface';
import { Product } from 'src/app/interfaces/product.interface';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userData!: userInterface;
  users!: user[];
  products!: Product[];
  urlSegment: any;
  constructor(public route: ActivatedRoute) {}

  checkUrlSegment(): void {
    this.urlSegment = this.route.snapshot.url
      .map((segment) => segment.path)
      .join('/');
  }
}
