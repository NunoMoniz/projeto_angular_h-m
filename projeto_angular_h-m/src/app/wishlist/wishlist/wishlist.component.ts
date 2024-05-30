import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../../shared/product.type';
import { ProductComponent } from '../../products/product/product.component';
import { ServwishlistService } from '../servwishlist.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

  dbWishlist: Product[] = [];

  constructor(private route: Router, private servwishlist: ServwishlistService) { }

  ngOnInit() {
    this.readWishlist();
  }

  readWishlist() {
    this.dbWishlist = this.servwishlist.getWishlistItems();
  }

  showInfo(id: number) {
    this.route.navigate(['products', id]);
  }

  addItem(id: number) {
    console.log(id);
    this.servwishlist.addItem(id);
    this.readWishlist();
  }

  removeItem(id: number) {
    console.log(id);
    this.servwishlist.removeItem(id);
    this.readWishlist();
  }
  
}
