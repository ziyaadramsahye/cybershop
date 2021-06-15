import { Component, OnInit, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FeaturedProductsService } from 'src/app/services/featured-products.service';
import { Product } from "../../models/product.model";

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedProductsComponent implements OnInit {

  loading = false;

  color = 'accent';

  featuredProducts: Product[] = [];

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
       items: 4
     },
      940: {
       items: 4
     }
    },
    nav: false,
    URLhashListener: true
  }

  featuredProductsCopy = this.featuredProducts;


  public cdr: ChangeDetectorRef;

  constructor(private elem: ElementRef, cdr: ChangeDetectorRef, private featuredProductsService: FeaturedProductsService) {
    this.cdr = cdr;
  }

  ngOnInit(): void {
    this.featuredProducts = this.featuredProductsService.getFeaturedProducts();
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async onFeatureListClick(event){

    var category = event.target.innerHTML;
    var blockBtns = document.getElementsByClassName("block-btn");

    Array.prototype.forEach.call(blockBtns, (btn) => {
      if(btn.classList.contains("active")){
        btn.classList.remove("active");
      }
    })

    if(category !== "All"){
      var cat_prods = this.featuredProductsCopy.filter(p => {
        if(p.category === category){
          return true;
        }
        else{
          return false;
        }
      })

      var owl = document.getElementsByClassName("owl-show");

      Array.prototype.forEach.call(owl, (o) => {
        if(o.classList.contains("show-view")){
          o.classList.remove("show-view");
          o.classList.add("no-view");
        }
      })

      this.loading = true;

      this.featuredProducts = cat_prods;

      await this.delay(1000);

      this.loading = false;

      Array.prototype.forEach.call(owl, (o) => {
        if(o.classList.contains("no-view")){
          o.classList.remove("no-view");
          o.classList.add("show-view");
        }
      })
    }
    else{

      this.loading = true;

      this.featuredProducts = this.featuredProductsCopy;

      await this.delay(2000);

      this.loading = false;
    }


    this.cdr.detectChanges();

    event.target.classList.add("active");
  }
}
