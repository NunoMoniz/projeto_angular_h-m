import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Product } from '../../shared/product.type';
import { ServproductsService } from '../servproducts.service';

@Component({
  selector: 'app-productinfo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './productinfo.component.html',
  styleUrl: './productinfo.component.css'
})
export class ProductinfoComponent {

  id!: number;
  product!: Product;

  constructor(private activeRoute: ActivatedRoute, private route: Router, private servProduct: ServproductsService) { }

  ngOnInit() {
    if (this.activeRoute.snapshot.paramMap.has('id')) {
      let parameter = this.activeRoute.snapshot.paramMap.get('id');
      if (parameter !== null) {
        this.id = +parameter;
        if (isNaN(this.id)) {
          this.route.navigate(['products']);
        } else {
          this.product = this.servProduct.getProductById(this.id);
        }
      } else {
        this.route.navigate(['products']);
      }
    } else {
      this.route.navigate(['products']);
    }
  }

}
