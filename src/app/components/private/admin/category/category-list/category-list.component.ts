import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor( private categoryService: CategoryService) { }
categoriesList : Category[]=[];
allCategories : Category[]=[]
name: string = "";
ngOnInit(): void {
  this.getAllCategories();
}

getAllCategories() {
  this.categoryService.getAllCategories().subscribe(
    (result : any) => {
      this.categoriesList = result;
      this.allCategories = result;
    },
    (err : any) => {
      console.log(err);      
    }
  )
}

deleteCategory(category: any) {
   
  this.categoryService.deleteCategory(category.id).subscribe(
    (result :any) => {

      let index = this.categoriesList.indexOf(category);
      this.categoriesList.splice(index, 1);
     
    },
    (err : any) => {
      console.log(err);
    }

  )
}

filterByName(name: string) {    
  this.categoriesList = this.allCategories.filter( (c) => c.name?.includes(name));
}
}

