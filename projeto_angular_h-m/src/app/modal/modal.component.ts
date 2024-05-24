import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../shared/user.type';
import { ServmodalService } from './servmodal.service';
import { Router } from '@angular/router';
import { MenuiconsComponent } from '../menuicons/menuicons.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() usersList: User[] = [];

  formLogin!: FormGroup;

  constructor(private router: Router, private servmodal: ServmodalService) {}

  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  onSubmit() {
    if (this.formLogin.valid) {
      const { email, password } = this.formLogin.value;
      const isValid = this.servmodal.checkLogin(email, password);
      if (isValid) {
        this.closingModal();
      } else {
        alert('Utilizador inexistente');
      }
    }
  }

  closingModal() {
    this.router.navigate(['']);
  }
}



