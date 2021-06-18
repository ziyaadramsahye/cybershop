import { EventEmitter, Injectable } from "@angular/core";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class WishListService{

  wishListProducts: Product[] = [];

  wishListChanged = new EventEmitter<Product[]>();

  addToWishList(product){
    this.wishListProducts.push(product);
    this.wishListChanged.emit(this.wishListProducts.slice());
    localStorage.setItem("wishlist", JSON.stringify(this.wishListProducts));
  }

  removeFromWishList(product){
    const foundIndex = this.wishListProducts.findIndex(item => item.id === product.id);
    if(foundIndex !== -1){
      this.wishListProducts.splice(foundIndex, 1);
    }
    localStorage.setItem("wishlist", JSON.stringify(this.wishListProducts.slice()));
    this.wishListChanged.emit(this.wishListProducts.slice());
    return this.wishListProducts;
  }

  getWishlistProducts(){
    return this.wishListProducts.slice();
  }
}
