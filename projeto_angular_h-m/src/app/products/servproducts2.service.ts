import { Injectable } from '@angular/core';
import { Product } from '../shared/product.type';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServproductsService2 {

  private urlAPI = "http://localhost:3000/products"

  constructor(private http: HttpClient) { }

  private errorProcessor(error: HttpErrorResponse) {
    let errorMessage: string;
    if (error.status === 404) {
      errorMessage = "Página não encontrada";
    } else {
      errorMessage = "Ocorreu um erro";
    }
    return throwError(() => errorMessage)
  }

  allProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlAPI)
      .pipe(
        catchError(this.errorProcessor)
      );
  }

}
