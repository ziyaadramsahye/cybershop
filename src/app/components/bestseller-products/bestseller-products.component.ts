import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestseller-products',
  templateUrl: './bestseller-products.component.html',
  styleUrls: ['./bestseller-products.component.scss']
})
export class BestsellerProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bestProduct = {
      id: 100,
      img: "assets/product-8.jpg",
      title: "Water Hose 40cm",
      rating: 3,
      reviews: 19,
      price: 1850.00,
      category: "Gadgets",
      instock: true,
      gallery: [
        'assets/product-1.jpg',
        'assets/product-2.jpg',
        'assets/product-3.jpg'
      ]
    };

  bestsellerProducts = [
    {
      id: 101,
      img: "assets/product-1.jpg",
      title: "Electric Planer Brandix KL370090G 300 Watts",
      rating: 1,
      reviews: 10,
      price: 800.00,
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
      id: 102,
      img: "assets/product-2.jpg",
      title: "Undefined Tool IRadix DPS3000SY 2700 Watts",
      rating: 4,
      reviews: 11,
      price: 1900.00,
      category: "Gadgets",
      instock: false,
      gallery: [
        'assets/product-1.jpg',
        'assets/product-2.jpg',
        'assets/product-3.jpg'
      ]
    },
    {
      id: 103,
      img: "assets/product-3.jpg",
      title: "Drill Screwdriver Brandix ALX7054 200 Watts",
      rating: 3,
      reviews: 12,
      price: 2800.00,
      category: "Electrical",
      instock: true,
      gallery: [
        'assets/product-1.jpg',
        'assets/product-2.jpg',
        'assets/product-3.jpg'
      ]
    },
    {
      id: 104,
      img: "assets/product-4.jpg",
      title: "Drill Series 3 Brandix KSR4590PQS 1500 Watts",
      rating: 5,
      reviews: 13,
      price: 4500.00,
      category: "Electrical",
      instock: true,
      gallery: [
        'assets/product-1.jpg',
        'assets/product-2.jpg',
        'assets/product-3.jpg'
      ]
    },
    {
      id: 105,
      img: "assets/product-5.jpg",
      title: "Brandix Router Power Tool 2017ERXPK",
      rating: 3,
      reviews: 14,
      price: 8000.00,
      category: "Gadgets",
      instock: true,
      gallery: [
        'assets/product-1.jpg',
        'assets/product-2.jpg',
        'assets/product-3.jpg'
      ]
    },
    {
      id: 106,
      img: "assets/product-6.jpg",
      title: "Brandix Drilling Machine DM2019KW4 4kW",
      rating: 3,
      reviews: 15,
      price: 1800.00,
      category: "Plumbing",
      instock: true,
      gallery: [
        'assets/product-1.jpg',
        'assets/product-2.jpg',
        'assets/product-3.jpg'
      ]
    }
  ];

}
