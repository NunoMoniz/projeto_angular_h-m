import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modallogout',
  standalone: true,
  imports: [],
  templateUrl: './modallogout.component.html',
  styleUrl: './modallogout.component.css'
})
export class ModallogoutComponent {

  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('email');
    this.closingModal();
  }

  closingModal() {
    this.router.navigate(['']);
  }
}
