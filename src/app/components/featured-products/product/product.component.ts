import { Component, OnInit, Input, Output } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product.model';
import { WishListService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() featuredProducts;

  closeResult = '';

  customOptions: any = {
    loop: true,
    margin: 10,
    items: 1,
    autoplay:false,
    responsiveClass: true,
    responsive: {
      0: {
       items: 1
     },
      480: {
       items: 1
     },
      940: {
       items: 1
     }
    },
    nav: false,
    URLhashListener:true,
    startPosition: 'URLHash'
  }

  constructor(private modalService: NgbModal,
    private _snackBar: MatSnackBar,
    private cartService: CartService,
    private wishListService: WishListService) {
  }

  ngOnInit(): void {
  }

  openProduct(content){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl', windowClass:'slideInUp'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }

  addToWishList(product: Product){
    this.wishListService.addToWishList(product);
  }

}
