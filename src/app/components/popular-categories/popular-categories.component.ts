import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-categories',
  templateUrl: './popular-categories.component.html',
  styleUrls: ['./popular-categories.component.scss']
})
export class PopularCategoriesComponent implements OnInit {

  categories = [
    {
      img: "assets/product-1.jpg",
      title: "Power Tools",
      ul: [
        'Drills & Mixers',
        'Cordless Screwdrivers',
        'Screwdrivers',
        'Wrenches',
        'Grinding Machines'
      ]
    },
    {
      img: "assets/product-2.jpg",
      title: "Hand Tools",
      ul: [
        'Tool Kits',
        'Hammers',
        'Spanners',
        'Handsaws',
        'Paint Tools'
      ]
    },
    {
      img: "assets/product-3.jpg",
      title: "Machine Tools",
      ul: [
        'Lathes',
        'Milling Machines',
        'Grinding Machines',
        'CNC Machines',
        'Sharpening Machines'
      ]
    },
    {
      img: "assets/product-4.jpg",
      title: "Power Machinery",
      ul: [
        'Generators',
        'Compressors',
        'Winches',
        'Plasma Cutting',
        'Electric Motors'
      ]
    },
    {
      img: "assets/product-5.jpg",
      title: "Measurement",
      ul: [
        'Tape Measure',
        'Theodolites',
        'Thermal Imagers',
        'Calipers',
        'Levels'
      ]
    },
    {
      img: "assets/product-6.jpg",
      title: "Clothes & PPE",
      ul: [
        'Winter Workwear',
        'Summer Workwear',
        'Helmets',
        'Belts and Bags',
        'Work Shoes'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
