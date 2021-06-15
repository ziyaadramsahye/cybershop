import { EventEmitter, Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { Product } from "../models/product.model";
import { Cart } from "../models/cart.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: Product[] = [];

  total: number = 0;
  totalPrice: number = 0;
  totalPriceChanged = new EventEmitter<number>();

  cartChanged = new EventEmitter<Product[]>();

  cartCountChange: Subject<number> = new Subject();

  cartCountChange$ = this.cartCountChange.asObservable();

  addToCart(product: Product){
    this.cartProducts.push(product);
    this.cartChanged.emit(this.cartProducts.slice());
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  getCartProducts(){
    return this.cartProducts.slice();
  }

  getCartCount(): Observable<any>{
    return this.cartCountChange$;
  }

  removeProduct(product: Product){
    const foundIndex = this.cartProducts.findIndex(item => item.id === product.id);
    if(foundIndex !== -1){
      this.cartProducts.splice(foundIndex, 1);
    }
    return this.cartProducts;
  }
}
