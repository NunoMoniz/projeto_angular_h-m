import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../shared/user.type';
import { users } from '../shared/users';



@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  formLogin!: FormGroup;
  constructor() {}

  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  onSubmit() {
    if (this.formLogin.valid) {
      const { email, password } = this.formLogin.value;
      const isValid = this.checkLogin(email, password);
      if (isValid) {
        this.closeModal.emit();
      } else {
        alert('Utilizador inexistente');
      }
    }
  }

  checkLogin(email: string, password: string): boolean {
    return users.some(user => user.email === email && user.password === password);
  }

}

