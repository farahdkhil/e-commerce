import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor( private service: CategoryService, private productService: ProductService) { }
  categoriesList : Category[]=[];
  productList : Product[]=[];
  allProducts : Product[]=[];
  ngOnInit(): void {
    this.service.getAllCategories().subscribe(
      (res:any)=>{
        this.categoriesList=res;
       console.log(res);
      },
      (err:any)=>{
        console.log(err);
      }
    )
    this.productService.getAllProducts().subscribe(
      (res:any)=>{
        this.productList=res;
        this.allProducts=res;
       console.log(res);
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }
  getAllCategories(){}
  getAllProducts(){}
  filterByCategory(id: Number | undefined) {
    id == 0 ? this.productList = this.allProducts : this.productList = this.allProducts.filter( (p) => p.category?.id == id);
  }
  
}
