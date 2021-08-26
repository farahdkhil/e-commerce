import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
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
      photo: new FormControl('', [
        Validators.required,
        
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
  get category() { return this.myForm.get('category') }
  ngOnInit(): void {
   
  }
  addProduct(){
    let data = this.myForm.value ;
    console.log(data); 
  }
}
