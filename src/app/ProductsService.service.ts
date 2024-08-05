import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // http = inject(HttpClient);
  // constructor(){}
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getProductsByCategory(category: string): Observable<any> {
    return this.http.get<any>(`https://fakestoreapi.com/products/category/${category}` );
  }
}
