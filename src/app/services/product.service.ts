import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:55736/api/soti/Products"
  private authHeader!: HttpHeaders;


  constructor(private http: HttpClient) {
    //let authorizeData = 'Basic ' + btoa(sessionStorage.getItem('emailId') + ':' + sessionStorage.getItem('password'));
    //let authorizeData = 'Basic ' + btoa('arun@gmail.com' + ':' + 'arun');
    let authorizeData = 'Bearer ' + sessionStorage.getItem("token");
    console.log(authorizeData);

    this.authHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authorizeData
    })
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/allproducts`, { headers: this.authHeader });
  }

  searchProduct(price: number | null): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/ByPrice/${price}`)
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/addproduct`, product, { headers: this.authHeader });
  }
}
