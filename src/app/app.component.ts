import { Component, Inject, Output, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  cartItems = [
    {
      title: 'Undefined Tool IRadix DPS3000SY 2700 Watts',
      amount: 1,
      price: 1500,
    }
  ];

  addProductToCart(product) {
    this.cartItems.push(product);
  }

  constructor() { }

  title = 'CyberShop';
}
