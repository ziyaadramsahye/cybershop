import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { FeaturedProductsService } from 'src/app/services/featured-products.service';

@Component({
  selector: 'app-cart-block',
  templateUrl: './cart-block.component.html',
  styleUrls: ['./cart-block.component.scss']
})
export class CartBlockComponent implements OnInit {

  cartProducts: string[] = [];
  products: Product[] = [];
  updateCart: boolean = false;

  constructor(private featuredProductsService: FeaturedProductsService) { }

  ngOnInit(): void {
    this.cartProducts = JSON.parse(localStorage.getItem("cart"));
    console.log(this.cartProducts);
  }

  onInputChange(value){
    if(value !== 1){
      this.updateCart = true;
    }
    else{
      this.updateCart = false;
    }
  }

  updateCartPrices(){

  }

}
