import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Merchant, MerchantRegistration } from '../models/merchant.model';
import { Product } from '../models/product.model';
import { Authority } from '../models/authority.model';

@Injectable({
  providedIn: 'root'
})
export class MerchantApiService {

    private apiUrl ='';

  constructor(private readonly http: HttpClient) { }

  login(mail: string, password: string): Observable<any> {
      const body = JSON.stringify(
          {
              'email': mail,
              'password': mail,
          }

      );
      return this.http.post(this.apiUrl + '/merchant-api/login', body);
  }

  // merchant routes

  registerMerchant(merchantRegistration: MerchantRegistration): Observable<Merchant> {
      return this.http.post(this.apiUrl + '/merchant-api/register', JSON.stringify(merchantRegistration));
  }

  getMerchant(): Observable<Merchant> {
      return this.http.get(this.apiUrl + '/merchant-api/register')
  }

  updateMerchant(merchant: Merchant): Observable<Merchant> {
      return this.http.patch(this.apiUrl + '/merchant-api/profile', JSON.stringify(merchant));
  }

  // product routes

  getProducts(): Observable<Product[]> {
      return this.http.get(this.apiUrl + '/merchant-api/products');
  }

  getProduct(productId: number): Observable<Product> {
      return this.http.get(this.apiUrl + '/merchant-api/products/' + productId);
  }

  addProduct(product: Product): Observable<Product> {
      return this.http.post(this.apiUrl + '/merchant-api/products/', JSON.stringify(product));
  }

  deleteProduct(product: Product): Observable<void> {
      return this.http.delete(this.apiUrl + '/merchant-api/products/' + product.id);
  }

  // authority route

  getAuthorities(): Observable<Authority[]> {
      return this.http.get(this.apiUrl + '/merchant-api/authorities');
  }
}
