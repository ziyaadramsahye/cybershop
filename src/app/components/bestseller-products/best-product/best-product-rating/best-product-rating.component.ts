import { Component, OnInit, Input } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-best-product-rating',
  templateUrl: './best-product-rating.component.html',
  styleUrls: ['./best-product-rating.component.scss']
})
export class BestProductRatingComponent implements OnInit {

  @Input() rating;

  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
  }

}
