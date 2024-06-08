import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServusersService } from '../servusers.service';
import { User } from '../../shared/user.type';

@Component({
  selector: 'app-newuser',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './newuser.component.html',
  styleUrl: './newuser.component.css'
})
export class NewuserComponent {

  // ESTÁ A DAR ERRO
  // @Output() newUser: EventEmitter<User> = new EventEmitter();

  // usersList: User[] = [];

  // TAMBÉM ESTÁ A DAR ERRO
  // constructor(private servusers: ServusersService) { }
  // ngOnInit() {
  //   this.formUsers = new FormGroup(
  //     {
  //       name: new FormControl('', { nonNullable: true }),
  //       email: new FormControl('', { nonNullable: true }),
  //       password: new FormControl('', { nonNullable: true }),
  //       address: new FormControl('', { nonNullable: true }),
  //       postcode: new FormControl('', { nonNullable: true }),
  //       country: new FormControl('', { nonNullable: true }),
  //       wishlist_productsid: new FormControl(null),
  //     }
  //   )
  // }
  // insertUser() {
  //   this.servusers.insertUser(this.formUsers.value).subscribe({
  //     next: user => {
  //       this.formUsers.reset();
  //       },
  //     error: erro => alert(erro)
  //   });
  // }

  formUsers!: FormGroup;

  private dbUsers: User[] = [];

  constructor(private servusers: ServusersService) { }
  
  // @Input()
  // set userinfo(userinfo: User) {
  //   if (userinfo) {
  //     this.formUsers.setValue({
  //       name: userinfo.name,
  //       email: userinfo.email,
  //       password: userinfo.password,
  //       address: userinfo.address,
  //       postcode: userinfo.postcode,
  //       country: userinfo.country
  //     });
  //   }
  // }

  ngOnInit() {
    this.formUsers = new FormGroup({
      name: new FormControl('', {
        nonNullable: true,
        validators: Validators.required
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3), Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(8), Validators.pattern('^[a-zA-Z0-9\W]*$')]
      }),
      address: new FormControl('', {
        nonNullable: true,
        validators: Validators.required
      }),
      postcode: new FormControl('', {
        nonNullable: true,
        validators: Validators.required
      }),
      country: new FormControl('', {
        nonNullable: true,
        validators: Validators.required
      })
    });
  }

  insertUser() {
    this.servusers.insertUser(this.formUsers.value);
    this.formUsers.reset();
  }
}