import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../../shared/product.type';
import { ProductComponent } from '../../products/product/product.component';
import { ServmodalService } from '../../modal/servmodal.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

  dbWishlist: Product[] = [];

  constructor(private route: Router, private servwishlist: ServmodalService) { }

  ngOnInit() {
    this.readWishlist();
  }

  readWishlist() {
    this.dbWishlist = this.servwishlist.getWishlistProduts();
  }

  showInfo(id: number) {
    this.route.navigate(['products', id]);
  }

  remove(id: number) {
    this.servwishlist.remove(id);
    this.readWishlist();
  }
  
}
