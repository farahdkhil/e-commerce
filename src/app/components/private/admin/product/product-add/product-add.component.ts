import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  myForm: FormGroup;
  categories:Category[]=[]
  constructor(private fb: FormBuilder , private service: ProductService,private serviceCategory :CategoryService, private router: Router) {
    let formControls = {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(2)
      ]),
      image: new FormControl('', [
               
      ]),
      category: new FormControl('', [
        Validators.required,
        
      ])

    }
    this.myForm = this.fb.group(formControls);
  }
  get name() { return this.myForm.get('name') }
  get description() { return this.myForm.get('description') }
  get price() { return this.myForm.get('price') }
  get image() { return this.myForm.get('imageUrl') }
  get category() { return this.myForm.get('category') }
  ngOnInit(): void {
    this.serviceCategory.getAllCategories().subscribe(
      (res : any)=>this.categories=res,
      (err)=>console.log(err)   
    )
  }
  addProduct(){
    let data = this.myForm.value ;
    console.log(data);
     
    let product = new Product(undefined, data.name,data.description,data.image,data.price,new Category(data.category));
    this.service.saveProduct(product).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigateByUrl('/product-list')
      },
      (err: any) => {
        console.log(err)
      }

    ); 
    }
}
