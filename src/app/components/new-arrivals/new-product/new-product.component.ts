import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

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

  constructor(private modalService: NgbModal, protected activatedRoute: ActivatedRoute, protected router: Router) { }

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

}
