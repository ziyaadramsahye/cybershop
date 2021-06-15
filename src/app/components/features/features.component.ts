import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  features = [
    {
      i: "fas fa-truck fa-3x",
      title: "Free Delivery",
      text: "For orders from Rs500"
    },
    {
      i: "fa fa-clock fa-3x",
      title: "Support 24/7",
      text: "Call us anytime"
    },
    {
      i: "fas fa-lock fa-3x",
      title: "100% Safety",
      text: "Only secure payments"
    },
    {
      i: "fas fa-tag fa-3x",
      title: "Hot Offers",
      text: "Discounts up to 90%"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
