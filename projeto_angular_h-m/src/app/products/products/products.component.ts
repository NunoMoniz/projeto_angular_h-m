import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from '../../shared/product.type';
import { ServproductsService } from '../servproducts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  dbProducts: Product[] = [];

  constructor(private route: Router, private servproducts: ServproductsService) { }

  ngOnInit() {
    this.readProducts();
  }

  readProducts() {
    this.dbProducts = this.servproducts.getAllProducts();
  }

  showInfo(id: number) {
    this.route.navigate(['products', id]);
  }
}