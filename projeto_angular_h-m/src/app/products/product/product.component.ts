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

  showInfo(id: number) {
    this.idShowInfo.emit(id);
  }
}
