import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';
interface Response{
  product:Product[];
}
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
  getProducts(): Observable<Response> {
    const token = 'Bearer '+localStorage.getItem('token');
    console.log('estoy en el get'+token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log('estoy en el get 2'+token);
    return this.http.get<Response>(`${this.myAppUrl}${this.myApiUrl}`,{headers:headers});
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
