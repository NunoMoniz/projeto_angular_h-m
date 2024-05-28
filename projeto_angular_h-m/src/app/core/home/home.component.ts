import { Component } from '@angular/core';
import { CarouselComponent } from '../../carousel/carousel.component';
import { FeaturedproductsComponent } from '../../products/featuredproducts/featuredproducts.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, FeaturedproductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
