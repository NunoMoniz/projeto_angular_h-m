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

  private urlAPI = "http://localhost:3000/relogios"

  constructor(private http: HttpClient) { }

  private processaErro(erro: HttpErrorResponse) {
    let mensagemErro: string;
    if (erro.status === 404) {
      mensagemErro = "Página não encontrada";
    } else {
      mensagemErro = "Ocorreu um erro";
    }
    return throwError(() => mensagemErro)
  }

  allProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlAPI)
      .pipe(
        catchError(this.processaErro)
      );
  }
}
