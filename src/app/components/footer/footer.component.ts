import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  infoLinks = [
    'About Us',
    'Delivery Information',
    'Privacy Policy',
    'Brands',
    'Contact Us',
    'Returns',
    'Site Map'
  ];

  accountLinks = [
    'Store Location',
    'Order History',
    'Wish List',
    'Newsletter',
    'Specials',
    'Gift Cards'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
