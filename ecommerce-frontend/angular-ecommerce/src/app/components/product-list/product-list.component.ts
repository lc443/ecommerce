import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  currentCategoryId: number;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

 
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    })
   
  }
listProducts() {

  //Check if "id" parameter is avaiable
  const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
  if(hasCategoryId) {
    //get the "id" param string and convert it to a number using " + " symbol
    this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
  } else {
    this.currentCategoryId = 1;
  }

  this.productService.getProductList(this.currentCategoryId).subscribe(
    data => {
      this.products = data; 
    });
}


}
