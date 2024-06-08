import { Injectable } from '@angular/core';
import { User } from '../shared/user.type';
import { users } from '../shared/users';
import { Product } from '../shared/product.type';
import { products } from '../shared/products';

@Injectable({
  providedIn: 'root'
})
export class ServmodalService {

  constructor() { }

  private dbUsers: User[] = users;

  private dbProducts: Product[] = products;

  checkLogin(email: string, password: string) {
    return this.dbUsers.find(user => user.email === email && user.password === password);
  }

  getWishlistProduts() {
    const wishlistUser = this.dbUsers.find(user => user.email === localStorage.getItem('email'));
    const wishlistProductIds = wishlistUser!.wishlist_productsid;
    return this.dbProducts.filter(product => wishlistProductIds.includes(product.id!));
  }

  getProductById(id: number) {
    return this.dbProducts.filter(product => product.id === id)[0];
  }

  remove(id: number) {
    const wishlistUser = users.find(user => user.email === localStorage.getItem('email'));
    const index = wishlistUser!.wishlist_productsid.indexOf(id);
    wishlistUser!.wishlist_productsid.splice(index, 1);
  }

}
