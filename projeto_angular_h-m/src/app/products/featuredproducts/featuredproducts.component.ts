import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServproductsService } from '../servproducts.service';
import { Product } from '../../shared/product.type';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-featuredproducts',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './featuredproducts.component.html',
  styleUrl: './featuredproducts.component.css'
})
export class FeaturedproductsComponent {
  dbFeaturedproducts: Product[] = [];

  constructor(private route: Router, private servproducts: ServproductsService) { }

  ngOnInit() {
    this.readFeaturedproducts();
  }

  readFeaturedproducts() {
    this.dbFeaturedproducts = this.servproducts.getAllProducts().filter(product => product.featured_product === true);
  }

  showInfo(id: number) {
    this.route.navigate(['products', id]);
  }

}
