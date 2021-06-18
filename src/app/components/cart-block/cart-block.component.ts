import { Component, OnInit, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-block',
  templateUrl: './cart-block.component.html',
  styleUrls: ['./cart-block.component.scss']
})
export class CartBlockComponent implements OnInit {

  cartProducts: Product[] = [];

  updateCart: boolean = false;

  cartRemoved = new EventEmitter<Product>();

  constructor(private cartService:  CartService) { }

  ngOnInit(): void {
    this.cartProducts = JSON.parse(localStorage.getItem("cart"));
    this.cartService.setCartProducts(this.cartProducts);
  }

  onInputChange(value){
    if(value !== 1){
      this.updateCart = true;
    }
    else{
      this.updateCart = false;
    }
  }

  removeFromCart(product){
    this.cartProducts = this.cartService.removeProduct(product);
    console.log(this.cartProducts);
  }

}
