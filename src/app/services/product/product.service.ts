import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  saveProduct(product: Product) {
    return this.httpClient.post<Product>("http://localhost:8080/products/add", product);
    
  }
  getAllProducts() {
    return this.httpClient.get<Product>("http://localhost:8080/products/all");
    
  }
  deleteProduct(id :any){
    return this.httpClient.delete<Product>(`http://localhost:8080/products/delete/${id}`);
  }
 getOne(id: any){
    return this.httpClient.get<any>(`http://localhost:8080/products/one/${id}`);
  }
  updateProduct(product : Product){
    return this.httpClient.patch<Product>("http://localhost:8080/products/update", product);
}
 
}