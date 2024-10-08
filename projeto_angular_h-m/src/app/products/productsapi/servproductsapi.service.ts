import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Product } from '../../shared/product.type';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServproductsapiService {

  // json-server --watch products.json --> OK
  // GET http://localhost:3000/products pelo Postman --> OK
  // ServproductsapiService --> NÃO FUNCIONA

  private urlAPI = "http://localhost:3000/products"

  constructor(private http: HttpClient) { }

  private errorProcessor(error: HttpErrorResponse) {
    let errorWarning: string;
    if (error.status === 404) {
      errorWarning = "Página não encontrada";
    } else {
      errorWarning = "Ocorreu um erro";
    }
    return throwError(() => errorWarning)
  }

  allProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlAPI)
      .pipe(
        catchError(this.errorProcessor)
      );
  }
}
