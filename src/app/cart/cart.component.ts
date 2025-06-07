import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { cartType } from '../services/cartType';
import { productType } from '../services/productType';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  loading = false;
  errorMessage = '';
  cartUrl = 'https://fakestoreapi.com/carts/5';
  myProducts: productType[] = [];
  cartProducts: cartType[] | any = [];
  constructor(private httpClinet: HttpClient,private productsService : ProductsService ) { }

  ngOnInit(): void {
    this.httpClinet.get(this.cartUrl).subscribe(
      (response) => {

        let cartProductstem = response;
        this.cartProducts = cartProductstem;
        // this.cartProducts.push(response);
        console.log(this.cartProducts)
      }
    )
    this.productsService.getProducts().subscribe(
      (response) => {                           //next() callback
     //   console.log('response received')
     this.cartProducts.
        this.myProducts = response.filter();
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
}
