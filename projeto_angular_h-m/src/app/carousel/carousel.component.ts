import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  constructor() { }

  private images: string[] = [
    'assets/carouselimages/slider1.jpg',
    'assets/carouselimages/slider2.jpg',
    'assets/carouselimages/slider3.jpg'
  ]

  getAllImages() {
    return this.images;
  }

}
