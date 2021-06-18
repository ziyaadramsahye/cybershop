import { Component, OnInit, Input, HostListener } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { User } from '../../../models/user.model';
import { Product } from '../../../models/product.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from 'src/app/services/auth.service';
import { WishListService } from 'src/app/services/wishlist.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  host: {
    '(document:storage)': 'onStorageChange($event)'
  }
})
export class MainNavComponent implements OnInit {
  private storageSub= new Subject<String>();

  count:number = 0;

  totalPrice: number = 0;
  shippingPrice: number = 125;
  taxPrice: number = 200;
  grandTotal:number = this.totalPrice + this.shippingPrice + this.taxPrice;

  cartItems: Product[];
  wishListItems: Product[];

  wishlistCount = 0;

  location: Location;

  isHome: boolean;

  loggedInUser: User = {email: null, password: null};

  closeResult = '';

  /*Forms Login*/
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(location: Location,
    private cartService: CartService,
    private authService: Auth,
    private wishListService: WishListService,
    private _snackBar: MatSnackBar) {
    this.location = location;
    this.isHome = this.location.path() === "" ? true : false ;
    this.getWishlistCountInit();
    this.getCartCountInit();
  }

  ngOnInit(): void {
    this.watchStorage().subscribe((data:string) => {
      console.log(data);
    });

    this.cartService.cartChanged.subscribe((products: Product[]) => {
      this.cartItems = products;
      this.count = products.length;
      this.updatePrice();
    });

    this.wishListService.wishListChanged.subscribe((products: Product[]) => {
      this.wishListItems = products;
      this.wishlistCount = products.length;
    })

    this.loggedInUser = this.authService.getUser();
  }

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }


  onCategoryShopClick(){
    if(document.getElementById('cat-div').classList.contains('categories-open')){
      document.getElementById('cat-div').classList.remove('categories-open');
      document.getElementById('cat-div').classList.add('categories-close');
      (document.getElementById('cat-shop-btn') as HTMLInputElement).disabled = false;
    }
    else{
      document.getElementById('cat-div').classList.add('categories-open');
      document.getElementById('cat-div').classList.remove('categories-close');
      (document.getElementById('cat-shop-btn') as HTMLInputElement).disabled = false;
    }
  }

  removeItem(product){
    this.cartItems = this.cartService.removeProduct(product);
    this.count = this.cartService.getCartProducts().length;
    this.updatePrice();
  }

  updatePrice(){
    this.totalPrice = 0;
    this.cartItems.slice().forEach(item => {
      this.totalPrice += item.price;
      this.grandTotal = this.totalPrice + this.shippingPrice + this.taxPrice;
    });
  }

  onLoginFormSubmit(){
    this.loggedInUser = this.loginForm.value;
    this.authService.login(this.loginForm.value);
    this.openSnackBar(this.loggedInUser.email);
  }

  logout(){
    this.loggedInUser = this.authService.logout();
  }

  openSnackBar(email: string) {
    this._snackBar.open(email + " logged in.", 'Close', {
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  getWishlistCountInit(){
    if(localStorage.getItem("wishlist") !== null){
      this.wishlistCount = JSON.parse(localStorage.getItem("wishlist")).length;
      this.wishListItems = JSON.parse(localStorage.getItem("wishlist"));
    }
    else{
      this.wishlistCount = 0;
    }
  }

  getCartCountInit(){
    if(localStorage.getItem("cart") !== null){
      this.count = JSON.parse(localStorage.getItem("cart")).length;
      this.cartItems = JSON.parse(localStorage.getItem("cart"));
      this.updatePrice();
    }
    else{
      this.count = 0;
    }
  }

  updateWishlistCount(){
    this.wishlistCount = this.wishListService.getWishlistProducts().length;
  }

  updateCartCount(){
    this.count = this.cartService.getCartProducts().length;
  }

}
