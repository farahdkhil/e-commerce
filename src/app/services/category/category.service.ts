import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }
  saveCategory(category: Category) {
    return this.httpClient.post<Category>("http://localhost:8080/categories/add", category);
    
  }
  getAllCategories() {
    return this.httpClient.get<Category>("http://localhost:8080/categories/all");
    
  }
  deleteCategory(id :any){
    return this.httpClient.delete<Category>(`http://localhost:8080/categories/delete/${id}`);
  }
 getOne(id: any){
    return this.httpClient.get<any>(`http://localhost:8080/categories/one/${id}`);
  }
  updateCategory(category : Category){
    return this.httpClient.patch<Category>("http://localhost:8080/categories/update", category);
  }
}
