import { Component } from '@angular/core';
import { Product } from '../../../shared/product.type';
import { CommonModule } from '@angular/common';
import { ServproductsapiService } from '../servproductsapi.service';

@Component({
  selector: 'app-productsapi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productsapi.component.html',
  styleUrl: './productsapi.component.css'
})
export class ProductsapiComponent {

  // json-server --watch products.json --> OK
  // GET http://localhost:3000/products pelo Postman --> OK
  // ServproductsapiService --> NÃO FUNCIONA

  productsList: Product[] = [];

  constructor(private servproducts: ServproductsapiService) { }

  ngOnInit() {
    this.readProducts();
  }

  readProducts() {
    this.servproducts.allProducts().subscribe({
      next: data => {
        this.productsList = data;
      },
      error: error => alert(error),
      complete: () => console.log("Complete")
    });
  }

}
