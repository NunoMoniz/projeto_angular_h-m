import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-menuicons',
  standalone: true,
  imports: [RouterLink, ModalComponent],
  templateUrl: './menuicons.component.html',
  styleUrl: './menuicons.component.css'
})
export class MenuiconsComponent {
  showModal: boolean = false;

  constructor(private router: Router) {}

  openModal() {
    this.showModal = true;
  }

  handleModalClose() {
    this.showModal = false;
    this.router.navigate(['/']);
}
}
