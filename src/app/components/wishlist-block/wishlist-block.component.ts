import { Component, EventEmitter, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { WishListService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist-block',
  templateUrl: './wishlist-block.component.html',
  styleUrls: ['./wishlist-block.component.scss']
})
export class WishlistBlockComponent implements OnInit {

  wishListProducts: Product[] = [];

  wishListRemoved = new EventEmitter<Product>();

  constructor(private cartService: CartService, private wishListService: WishListService) { }

  ngOnInit(): void {
    if(localStorage.getItem("wishlist") === null) {
      this.wishListProducts = [];
    }
    else{
      this.wishListProducts = JSON.parse(localStorage.getItem("wishlist"));
    }
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }

  removeFromWishlist(product: Product){
    this.wishListService.removeFromWishList(product);
    this.wishListProducts = this.wishListService.getWishlistProducts();
    this.wishListRemoved.emit(product);
  }

}
