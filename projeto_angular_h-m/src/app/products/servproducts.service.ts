import { Injectable } from '@angular/core';
import { Product } from '../shared/product.type';
import { products } from '../shared/products';

@Injectable({
  providedIn: 'root'
})
export class ServproductsService {

  private dbProducts: Product[] = products;

  constructor() { }

  getAllProducts() {
    return this.dbProducts;
  }

  getProductById(id: number) {
    return this.dbProducts.filter(product => product.id === id)[0];
  }
}