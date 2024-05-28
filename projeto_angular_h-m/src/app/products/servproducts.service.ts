import { Injectable } from '@angular/core';
import { Product } from '../shared/product.type';
import { products } from '../shared/products';

@Injectable({
  providedIn: 'root'
})
export class ServproductsService {

  constructor() { }

  private dbProducts: Product[] = products;

  getAllProducts() {
    return this.dbProducts;
  }

}