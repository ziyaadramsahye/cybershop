import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

  news = [
    {
      id: 1,
      img: 'assets/post-1.jpg',
      title: 'Some Philosophers Specialize In one or more historical periods',
      date: '2019-08-12',
      text: ' In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures... '
    },
    {
      id: 2,
      img: 'assets/post-2.jpg',
      title: 'logic is the study of reasoning and argument part 2',
      date: '2019-09-05',
      text: ' In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures... '
    },
    {
      id: 3,
      img: 'assets/post-3.jpg',
      title: 'Some Philosophers Specialize In one or more historical periods',
      date: '2019-08-12',
      text: ' In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures... '
    },
    {
      id: 4,
      img: 'assets/post-4.jpg',
      title: 'Some Philosophers Specialize In one or more historical periods',
      date: '2019-08-12',
      text: ' In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures... '
    },
    {
      id: 5,
      img: 'assets/post-8.jpg',
      title: 'Some Philosophers Specialize In one or more historical periods',
      date: '2019-08-12',
      text: ' In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures... '
    }
  ]

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
       items: 2
     },
      940: {
       items: 2
     }
    },
    nav: false,
    URLhashListener: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
