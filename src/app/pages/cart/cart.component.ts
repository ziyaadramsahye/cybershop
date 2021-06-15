import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [ CartService ]
})
export class CartComponent implements OnInit {

  breadcrumb = ["My Cart"];

  constructor() { }

  ngOnInit(): void {
  }

}
