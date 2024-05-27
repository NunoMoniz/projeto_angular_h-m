import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServmodalService } from '../modal/servmodal.service';

@Component({
  selector: 'app-menuicons',
  standalone: true,
  imports: [RouterModule, RouterLink, CommonModule],
  templateUrl: './menuicons.component.html',
  styleUrl: './menuicons.component.css'
})
export class MenuiconsComponent {

  constructor(private servmodal: ServmodalService) {}

  loginOk() {
    if (this.servmodal.checkLogin()) {

    }

  }
}
