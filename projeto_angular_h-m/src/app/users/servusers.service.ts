import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../shared/user.type';
import { users } from '../shared/users';

@Injectable({
  providedIn: 'root'
})
export class ServusersService {

  // private urlAPI = "http://localhost:3000/users"

  // constructor(private http: HttpClient) { }

  // private errorProcessor(error: HttpErrorResponse) {
  //   let errorWarning: string;
  //   if (error.status === 404) {
  //     errorWarning = "Página não encontrada";
  //   } else {
  //     errorWarning = "Ocorreu um erro";
  //   }
  //   return throwError(() => errorWarning)
  // }

  // insertUser(user: User): Observable<User> {
  //   return this.http.post<User>(this.urlAPI, user)
  //     .pipe(
  //       catchError(this.errorProcessor)
  //     );
  // }

  private dbUsers: User[] = users;

  insertUser(user: User) {
    let pos_last = this.dbUsers.length - 1;
    let last_element = this.dbUsers[pos_last];
    let last_id = last_element.id!;
    let next_id = last_id  + 1;
    user.id = next_id;
    this.dbUsers.push(user);
    console.log(user.name);
    alert("Validado");
  }

}