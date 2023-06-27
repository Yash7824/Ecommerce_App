import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  url = 'Cart';

  CartList: Product[] = [];
  constructor(private http: HttpClient) {}

  public getCarts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/${this.url}`);
  }

  public getCart(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.apiUrl}/${this.url}/${id}`);
  }

  public addCart(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>(
      `${environment.apiUrl}/${this.url}`,
      product
    );
  }

  public updateCart(product: Product): Observable<Product[]> {
    return this.http.put<Product[]>(
      `${environment.apiUrl}/${this.url}`,
      product
    );
  }

  public deleteCart(product: Product): Observable<Product[]> {
    return this.http.delete<Product[]>(
      `${environment.apiUrl}/${this.url}/${product.id}`
    );
  }

  public deleteAllCart(): Observable<Product[]> {
    return this.http.delete<Product[]>(`${environment.apiUrl}/${this.url}`);
  }
}
