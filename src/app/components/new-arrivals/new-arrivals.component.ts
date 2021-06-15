import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from '@angular/core';


declare var _: any;

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class NewArrivalsComponent implements OnInit {

  loading = false;

  color = 'accent';

  featuredProducts = [
    {
      img: "assets/product-1.jpg",
      title: "Electric Planer Brandix KL370090G 300 Watts",
      rating: 1,
      reviews: 10,
      price: "800.00",
      category: "Electrical",
      instock: true,
      gallery: [
        'assets/product-1.jpg',
        'assets/product-2.jpg',
        'assets/product-3.jpg',
        'assets/product-4.jpg',
        'assets/product-5.jpg'
      ]
    },
    {
      img: "assets/product-2.jpg",
      title: "Undefined Tool IRadix DPS3000SY 2700 Watts",
      rating: 4,
      reviews: 11,
      price: "1900.00",
      category: "Gadgets",
      instock: false,
      gallery: [
        'assets/product-1.jpg',
        'assets/product-2.jpg',
        'assets/product-3.jpg'
      ]
    },
    {
      img: "assets/product-3.jpg",
      title: "Drill Screwdriver Brandix ALX7054 200 Watts",
      rating: 3,
      reviews: 12,
      price: "2800.00",
      category: "Electrical",
      instock: true,
      gallery: [
        'assets/product-1.jpg',
        'assets/product-2.jpg',
        'assets/product-3.jpg'
      ]
    },
    {
      img: "assets/product-4.jpg",
      title: "Drill Series 3 Brandix KSR4590PQS 1500 Watts",
      rating: 5,
      reviews: 13,
      price: "4500.00",
      category: "Electrical",
      instock: true,
      gallery: [
        'assets/product-1.jpg',
        'assets/product-2.jpg',
        'assets/product-3.jpg'
      ]
    },
    {
      img: "assets/product-5.jpg",
      title: "Brandix Router Power Tool 2017ERXPK",
      rating: 3,
      reviews: 14,
      price: "8000.00",
      category: "Gadgets",
      instock: true,
      gallery: [
        'assets/product-1.jpg',
        'assets/product-2.jpg',
        'assets/product-3.jpg'
      ]
    },
    {
      img: "assets/product-6.jpg",
      title: "Brandix Drilling Machine DM2019KW4 4kW",
      rating: 3,
      reviews: 15,
      price: "1800.00",
      category: "Plumbing",
      instock: true,
      gallery: [
        'assets/product-1.jpg',
        'assets/product-2.jpg',
        'assets/product-3.jpg'
      ]
    },
    {
      img: "assets/product-7.jpg",
      title: "Brandix Pliers",
      rating: 3,
      reviews: 18,
      price: "2800.00",
      category: "Plumbing",
      instock: true,
      gallery: [
        'assets/product-1.jpg',
        'assets/product-2.jpg',
        'assets/product-3.jpg'
      ]
    },
    {
      img: "assets/product-8.jpg",
      title: "Water Hose 40cm",
      rating: 3,
      reviews: 19,
      price: "1850.00",
      category: "Electrical",
      instock: true,
      gallery: [
        'assets/product-1.jpg',
        'assets/product-2.jpg',
        'assets/product-3.jpg'
      ]
    },
    {
      img: "assets/product-8.jpg",
      title: "Water Hose 40cm",
      rating: 3,
      reviews: 19,
      price: "1850.00",
      category: "Plumbing",
      instock: true,
      gallery: [
        'assets/product-1.jpg',
        'assets/product-2.jpg',
        'assets/product-3.jpg'
      ]
    },
    {
      img: "assets/product-8.jpg",
      title: "Water Hose 40cm",
      rating: 3,
      reviews: 19,
      price: "1850.00",
      category: "Plumbing",
      instock: true,
      gallery: [
        'assets/product-1.jpg',
        'assets/product-2.jpg',
        'assets/product-3.jpg'
      ]
    },
    {
      img: "assets/product-8.jpg",
      title: "Water Hose 40cm",
      rating: 3,
      reviews: 19,
      price: "1850.00",
      category: "Gadgets",
      instock: true,
      gallery: [
        'assets/product-1.jpg',
        'assets/product-2.jpg',
        'assets/product-3.jpg'
      ]
    },
    {
      img: "assets/product-8.jpg",
      title: "Water Hose 40cm",
      rating: 3,
      reviews: 19,
      price: "1850.00",
      category: "Gadgets",
      instock: true,
      gallery: [
        'assets/product-1.jpg',
        'assets/product-2.jpg',
        'assets/product-3.jpg'
      ]
    },
  ];

  customOptions: any = {
    loop: true,
    margin: 10,
    items: 6,
    autoplay:false,
    responsiveClass: true,
    responsive: {
      0: {
       items: 1
     },
      480: {
       items: 3
     },
      940: {
       items: 3
     }
    },
    nav: false
  }

  featuredProductsCopy = this.featuredProducts;

  newFeaturedProducts:any[];

  public cdr: ChangeDetectorRef;

  constructor(private elem: ElementRef, cdr: ChangeDetectorRef) {
    this.cdr = cdr;
  }

  ngOnInit(): void {
    this.newFeaturedProducts = this.splitArr(this.featuredProducts, 6)
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

  splitArr(arr, size) {
    // let newArr = [];
    // for(let i = 0; i< arr.length; i += size) {
    //   newArr.push(arr.slice(i, i+size));
    // }
    // return newArr;
    return arr.slice(Math.max(arr.length - 5, 0));
 }

}
