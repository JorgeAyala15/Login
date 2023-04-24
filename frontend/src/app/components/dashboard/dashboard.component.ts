import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listProduct: Product[] = [];

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productService.getProducts().subscribe({
      next: (res) => {
       
        console.log('estoy en el dashboard '+res);
        this.listProduct = res.product;
      },
      error: (err) => {console.log(err)
      }
    })
  }
  getProduct(){
    
  }
  postProduct(){

  }
  putProduct(){

  }
  deleteProduct(){
    
  }
}
