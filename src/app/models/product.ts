import { Category } from "./category";

export class Product {
    constructor(
         public id?: Number,
         public name?: String,
         public description? : String,
         public imageUrl? : String,
         public price? : Number,
         public category? : Category) { }
}
