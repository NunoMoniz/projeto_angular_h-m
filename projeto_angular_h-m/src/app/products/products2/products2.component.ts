import { Component } from '@angular/core';
import { Product } from '../../shared/product.type';
import { CommonModule } from '@angular/common';
import { ServproductsService2 } from '../servproducts2.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products2.component.html',
  styleUrl: './products2.component.css'
})
export class ProductsComponent {

  productsList: Product[] = [];

  constructor(private servproducts: ServproductsService2) { }

  ngOnInit() {
    this.readProducts();
  }

  readProducts() {
    this.servproducts.allProducts().subscribe({
      next: dados => {
        this.productsList = dados;
      },
      error: erro => alert(erro),
      // REVER ESTE COMPLETE
      complete: () => console.log("Complete")
    });
  }
}
