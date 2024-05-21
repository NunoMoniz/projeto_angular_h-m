import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { ProductsComponent } from '../../products/products/products.component';

@Component({
  selector: 'app-topmenu',
  standalone: true,
  imports: [RouterModule, MatMenuModule, ProductsComponent],
  templateUrl: './topmenu.component.html',
  styleUrl: './topmenu.component.css'
})
export class TopmenuComponent {

}
