import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from '../../shared/product.type';
import { ServproductsService } from '../servproducts.service';
import { Router } from '@angular/router';
import { FilterComponent } from '../filter/filter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent, FilterComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  dbProducts: Product[] = [];

  filteredProducts: Product[] = [];

  filteredByType: Product[] = [];

  filteredByColor: Product[] = [];

  constructor(private route: Router, private servproducts: ServproductsService) { }

  ngOnInit() {
    this.readProducts();
  }

  readProducts() {
    this.dbProducts = this.servproducts.getAllProducts();
    this.filteredProducts = this.dbProducts.filter(product => {
      return this.filteredByType.includes(product) && this.filteredByColor.includes(product);
    });
  }
  

  filterType(type: string) {
    if (type === 'All') {
      this.filteredByType = this.dbProducts;
    } else {
      this.filteredByType = this.dbProducts.filter(product => {
        return product.product_type === type;
      });
    };
    this.filteredProducts === this.filteredByType;
  }

  filterColor(color: string) {
    if (color === 'All') {
      this.filteredByColor = this.dbProducts;
    } else {
      this.filteredByColor = this.dbProducts.filter(product => {
        return product.color === color;
      });
    };
    this.filteredProducts === this.filteredByColor;
  }

  showInfo(id: number) {
    this.route.navigate(['products', id]);
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