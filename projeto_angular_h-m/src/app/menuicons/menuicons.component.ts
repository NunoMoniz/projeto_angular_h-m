import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menuicons',
  standalone: true,
  imports: [RouterModule, RouterLink, CommonModule],
  templateUrl: './menuicons.component.html',
  styleUrl: './menuicons.component.css'
})
export class MenuiconsComponent {
  
  checkLog() {
    const userEmail = localStorage.getItem('email');
    if (userEmail) {
      return true;
    } else {
      return false;
    };
  }
}
