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
  @Output() idShowInfo: EventEmitter<number> = new EventEmitter();
  @Output() idAdd: EventEmitter<number> = new EventEmitter();
  @Output() idDelete: EventEmitter<number> = new EventEmitter();

  showInfo(id: number) {
    this.idShowInfo.emit(id);
  }

  addToWishlist(id: number, event: MouseEvent) {
    this.idAdd.emit(id);
  }

  removeFromWishlist(id: number, event: MouseEvent) {
    event.stopPropagation();
    this.idDelete.emit(id);
  }

  checkLog() {
    const userEmail = localStorage.getItem('email');
    if (userEmail) {
      return true;
    } else {
      return false;
    };
  }
}
