import { Injectable } from '@angular/core';
import { ServproductsService } from '../products/servproducts.service';
import { Wishlist } from '../shared/wishlist.type';
import { wishlist } from '../shared/wishlist';
import { Product } from '../shared/product.type';
import { products } from '../shared/products';

@Injectable({
  providedIn: 'root'
})
export class ServwishlistService {

  private dbProducts: Product[] = products;

  private lists: Wishlist[] = wishlist;

  logedUserEmail = localStorage.getItem('email');

  logedUserWishlist: Product[] = [];

  constructor(private servproducts: ServproductsService) { }

  getWishlistProduts() {
    const wishlistUser = this.lists.find(list => list.email === this.logedUserEmail);
    const wishlistProductIds = wishlistUser!.wishlist_productsid;
    return this.dbProducts.filter(product => wishlistProductIds.includes(product.id!));
  }

  addItem(id: number) {
    // json-server --watch products.json --> OK
    // GET http://localhost:3000/products pelo Postman --> OK
    // ServproductsapiService --> NÃO FUNCIONA
  }

  removeItem(productid: number) {
    const wishlistUser = this.lists.find(list => list.email === this.logedUserEmail);
    const index = wishlistUser!.wishlist_productsid.indexOf(productid);
    wishlistUser!.wishlist_productsid.splice(index, 1);
  }

}
