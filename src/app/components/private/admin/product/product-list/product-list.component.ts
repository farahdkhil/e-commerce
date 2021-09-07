import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsList:Product[]=[];
  allProducts : Product[]=[];
  name: string = "";
  constructor( private productService:ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(
      (res : any) => this.productsList = res,
      (err :any) => console.log(err)
    )
  }

  deleteProduct(product: any) {
    
    this.productService.deleteProduct(product.id).subscribe(
      (result) => {
 
        let index = this.productsList.indexOf(product);
        this.productsList.splice(index, 1);
      },
      (err) => {
        console.log(err);
      }

    )
  }
  filterByName(name: string) {    
    this.productsList = this.allProducts.filter( (c) => c.name?.includes(name));
  }
}