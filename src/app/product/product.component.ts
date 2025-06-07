import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { productType } from '../services/productType';
import { asyncScheduler, Observable, Subscriber } from 'rxjs';
console.log("-------------------   PRODUCT    ------------------- ")
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  loading = false;
  errorMessage = '';
  myProducts: productType[] = [];

  constructor(private route: Router, private products: ProductsService) { }

  getProdutsCom() {
    this.loading = true;
    this.errorMessage = "";
    this.products.getProducts().subscribe(
      (response) => {                           //next() callback
        //   console.log('response received')
        this.myProducts = response;
      },
      (error) => {                              //error() callback
        //    console.error('Request failed with error')
        this.errorMessage = error;
        this.loading = false;
      },
      () => {                                   //complete() callback
        // console.error('Request completed')      //This is actually not needed 
        this.loading = false;
      }
    )
  }

  ngOnInit(): void {
    console.log("-------------------   PRODUCT    ------------------- ")
    this.getProdutsCom();
  }

  goToEmployee() {
    this.route.navigateByUrl("Employee");
  }
  goToHome() {
    this.route.navigateByUrl("Home")
  }
}