import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  brands = [
    'assets/logo-1.png',
    'assets/logo-2.png',
    'assets/logo-3.png',
    'assets/logo-4.png',
    'assets/logo-5.png',
    'assets/logo-6.png',
    'assets/logo-7.png'
  ];

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
       items: 6
     },
      940: {
       items: 6
     }
    },
    nav: false,
    URLhashListener: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
