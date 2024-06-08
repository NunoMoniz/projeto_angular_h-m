import { Component } from '@angular/core';
import { Product } from '../../shared/product.type';
import { ServapiproductsService } from '../servapiproducts.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-apiproducts',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './apiproducts.component.html',
  styleUrl: './apiproducts.component.css'
})
export class ApiproductsComponent {

  productsList: Product[] = [];

  constructor(private servproducts: ServapiproductsService) { }

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
