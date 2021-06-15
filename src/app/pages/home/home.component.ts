import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ CartService ]
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150) {
      document.getElementById('cat-div').classList.remove('categories-open');
      document.getElementById('cat-div').classList.add('categories-close');
      (document.getElementById('cat-shop-btn') as HTMLInputElement).disabled = false;
    }
    else{
      document.getElementById('cat-div').classList.add('categories-open');
      document.getElementById('cat-div').classList.remove('categories-close');
      (document.getElementById('cat-shop-btn') as HTMLInputElement).disabled = true;
    }
  }

}
