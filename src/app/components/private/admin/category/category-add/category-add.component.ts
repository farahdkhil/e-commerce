import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private service: CategoryService, private router: Router) {
    let formControls = {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ])

    }
    this.myForm = this.fb.group(formControls);
  }
  get name() { return this.myForm.get('name') }
  ngOnInit(): void {
  }
  saveName() {
    let data = this.myForm.value;
    console.log(data);
    let category = new Category(undefined, data.name);
    this.service.saveCategory(category).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigateByUrl('/category-list')
      },
      (err: any) => {
        console.log(err)
      }

    );


  }

}
