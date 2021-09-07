import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder,
    private service: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
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
    let id = this.route.snapshot.params.id;

    this.service.getOne(id).subscribe(
      result => {
        let category = result;
        console.log(result);

        this.myForm.patchValue({
          name: category.name,
        })

      },
      error => {
        console.log(error);
      }
    )
  }

  updateCategory() {
    let data = this.myForm.value;
    let id = this.route.snapshot.params.id;
    let category = new Category(id, data.name);
    console.log(this.myForm.value);
    this.service.updateCategory(category).subscribe(
      result => {
        console.log(result);
        this.router.navigate(['/category-list']);
      },
      error => {
        console.log(error);
      });


  }
}
