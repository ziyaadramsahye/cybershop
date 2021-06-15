import { Component, OnInit, Input } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { User } from '../../../models/user.model';
import { Product } from '../../../models/product.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from 'src/app/services/auth.service';

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

  wishlistCount = 0;

  location: Location;

  isHome: boolean;

  loggedInUser: User = {email: null, password: null};

  /*Forms Login*/
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(location: Location,
    private cartService: CartService,
    private authService: Auth) {
    this.location = location;
    this.isHome = this.location.path() === "" ? true : false ;
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
    this.authService.login(this.loginForm.value);
  }

  logout(){
    this.loggedInUser = this.authService.logout();
  }
}
