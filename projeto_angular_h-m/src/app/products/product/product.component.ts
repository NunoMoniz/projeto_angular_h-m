import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../shared/product.type';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() productsList: Product[] = [];
  @Input() featuredproductsList: Product[] = [];
  @Input() wishlist: Product[] = [];
  @Output() idShowInfo: EventEmitter<number> = new EventEmitter();
  @Output() idAdd: EventEmitter<number> = new EventEmitter();
  @Output() idDelete: EventEmitter<number> = new EventEmitter();

  showInfo(id: number) {
    this.idShowInfo.emit(id);
  }

  addToWishlist(id: number) {
    this.idAdd.emit(id);
  }

  removeWishlistItem(id: number, event: MouseEvent) {
    event.stopPropagation();
    this.idDelete.emit(id);
  }

  checkLog() {
    const userEmail = sessionStorage.getItem('userEmail');
    if (userEmail) {
      return true;
    } else {
      return false;
    };
  }
}
