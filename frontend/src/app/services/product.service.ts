import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'http://localhost:8000';
    this.myApiUrl = '/api/products';
  }

  getProducts(): Observable<Product[]> {
    const token = 'Bearer '+localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
     return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`,{headers:headers});
  }
  getProduct(id: number){
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }
  postProduct(product: Product){
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`,product);
  }
  putProduct(id: number, product:Product){
    return this.http.put(`${this.myAppUrl}${this.myApiUrl}/${id}`,product);
  }
  deleteProduct(id: number){
    return this.http.delete(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }
}
