import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServmodalService } from './servmodal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  formLogin!: FormGroup;
  loginError?: string;

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
      const validUser = this.servmodal.checkLogin(email, password);
      if (validUser) {
        localStorage.setItem('email', email);
        this.closingModal();
      } else {
        this.loginError = 'Utilizador inexistente';
      }
    }
  }

  closingModal() {
    this.router.navigate(['']);
  }
}



