import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  offers = [
    {
      title: 'Top Rated Products',
      divider: 'short',
      products: [
        {
          img: 'assets/product-1.jpg',
          title: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
          rating: 2,
          reviews: 3,
          price: 8000,
          discount: true,
          discountPrice: 7200
        },
        {
          img: 'assets/product-2.jpg',
          title: 'Brandix Router Power Tool 2017ERXPK',
          rating: 3,
          reviews: 30,
          price: 800,
          discount: false,
          discountPrice: 0
        },
        {
          img: 'assets/product-3.jpg',
          title: 'Brandix Drilling Machine DM2019KW4 4kW',
          rating: 4,
          reviews: 13,
          price: 7500,
          discount: false,
          discountPrice: 0
        },
      ]
    },
    {
      title: 'Special Offers',
      divider: 'medium',
      products: [
        {
          img: 'assets/product-4.jpg',
          title: 'Brandix Pliers',
          rating: 1,
          reviews: 2,
          price: 5300,
          discount: false,
          discountPrice: 0
        },
        {
          img: 'assets/product-5.jpg',
          title: 'Water Hose 40cm',
          rating: 2,
          reviews: 23,
          price: 850,
          discount: true,
          discountPrice: 400
        },
        {
          img: 'assets/product-6.jpg',
          title: 'Spanner Wrench',
          rating: 5,
          reviews: 6,
          price: 1200,
          discount: false,
          discountPrice: 0
        },
      ]
    },
    {
      title: 'Bestsellers',
      divider: 'long',
      products: [
        {
          img: 'assets/product-7.jpg',
          title: 'Electric Planer Brandix KL370090G 300 Watts',
          rating: 3,
          reviews: 3,
          price: 1800,
          discount: true,
          discountPrice: 1200
        },
        {
          img: 'assets/product-8.jpg',
          title: 'Undefined Tool IRadix DPS3000SY 2700 Watts',
          rating: 4,
          reviews: 9,
          price: 1575,
          discount: true,
          discountPrice: 1050
        },
        {
          img: 'assets/product-1.jpg',
          title: 'Drill Screwdriver Brandix ALX7054 200 Watts',
          rating: 3,
          reviews: 8,
          price: 9000,
          discount: false,
          discountPrice: 0
        },
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
