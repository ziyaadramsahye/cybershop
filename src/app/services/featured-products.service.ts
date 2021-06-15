import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FeaturedProductsService{
  featuredProducts = [
    {
      id: 1,
      img: "assets/product-1.jpg",
      title: "Electric Planer Brandix KL370090G 300 Watts",
      rating: 1,
      reviews: 10,
      price: 800.00,
      category: "Electrical",
      instock: true,
      gallery: [
        {
          img: 'assets/product-1.jpg',
          hash: "one"
        },
        {
          img: 'assets/product-2.jpg',
          hash: "two"
        },
        {
          img: 'assets/product-3.jpg',
          hash: "three"
        },
        {
          img: 'assets/product-4.jpg',
          hash: "four"
        },
        {
          img: 'assets/product-5.jpg',
          hash: "five"
        }
      ]
    },
    {
      id: 2,
      img: "assets/product-2.jpg",
      title: "Undefined Tool IRadix DPS3000SY 2700 Watts",
      rating: 4,
      reviews: 11,
      price: 1900.00,
      category: "Gadgets",
      instock: false,
      gallery: [
        {
          img: 'assets/product-1.jpg',
          hash: "one"
        },
        {
          img: 'assets/product-2.jpg',
          hash: "two"
        },
        {
          img: 'assets/product-3.jpg',
          hash: "three"
        },
        {
          img: 'assets/product-4.jpg',
          hash: "four"
        },
        {
          img: 'assets/product-5.jpg',
          hash: "five"
        }
      ]
    },
    {
      id: 3,
      img: "assets/product-3.jpg",
      title: "Drill Screwdriver Brandix ALX7054 200 Watts",
      rating: 3,
      reviews: 12,
      price: 2800.00,
      category: "Electrical",
      instock: true,
      gallery: [
        {
          img: 'assets/product-1.jpg',
          hash: "one"
        },
        {
          img: 'assets/product-2.jpg',
          hash: "two"
        },
        {
          img: 'assets/product-3.jpg',
          hash: "three"
        },
        {
          img: 'assets/product-4.jpg',
          hash: "four"
        },
        {
          img: 'assets/product-5.jpg',
          hash: "five"
        }
      ]
    },
    {
      id: 4,
      img: "assets/product-4.jpg",
      title: "Drill Series 3 Brandix KSR4590PQS 1500 Watts",
      rating: 5,
      reviews: 13,
      price: 4500.00,
      category: "Electrical",
      instock: true,
      gallery: [
        {
          img: 'assets/product-1.jpg',
          hash: "one"
        },
        {
          img: 'assets/product-2.jpg',
          hash: "two"
        },
        {
          img: 'assets/product-3.jpg',
          hash: "three"
        },
        {
          img: 'assets/product-4.jpg',
          hash: "four"
        },
        {
          img: 'assets/product-5.jpg',
          hash: "five"
        }
      ]
    },
    {
      id: 5,
      img: "assets/product-5.jpg",
      title: "Brandix Router Power Tool 2017ERXPK",
      rating: 3,
      reviews: 14,
      price: 8000.00,
      category: "Gadgets",
      instock: true,
      gallery: [
        {
          img: 'assets/product-1.jpg',
          hash: "one"
        },
        {
          img: 'assets/product-2.jpg',
          hash: "two"
        },
        {
          img: 'assets/product-3.jpg',
          hash: "three"
        },
        {
          img: 'assets/product-4.jpg',
          hash: "four"
        },
        {
          img: 'assets/product-5.jpg',
          hash: "five"
        }
      ]
    },
    {
      id: 6,
      img: "assets/product-6.jpg",
      title: "Brandix Drilling Machine DM2019KW4 4kW",
      rating: 3,
      reviews: 15,
      price: 1800.00,
      category: "Plumbing",
      instock: true,
      gallery: [
        {
          img: 'assets/product-1.jpg',
          hash: "one"
        },
        {
          img: 'assets/product-2.jpg',
          hash: "two"
        },
        {
          img: 'assets/product-3.jpg',
          hash: "three"
        },
        {
          img: 'assets/product-4.jpg',
          hash: "four"
        },
        {
          img: 'assets/product-5.jpg',
          hash: "five"
        }
      ]
    },
    {
      id: 7,
      img: "assets/product-7.jpg",
      title: "Brandix Pliers",
      rating: 3,
      reviews: 18,
      price: 2800.00,
      category: "Plumbing",
      instock: true,
      gallery: [
        {
          img: 'assets/product-1.jpg',
          hash: "one"
        },
        {
          img: 'assets/product-2.jpg',
          hash: "two"
        },
        {
          img: 'assets/product-3.jpg',
          hash: "three"
        },
        {
          img: 'assets/product-4.jpg',
          hash: "four"
        },
        {
          img: 'assets/product-5.jpg',
          hash: "five"
        }
      ]
    },
    {
      id: 8,
      img: "assets/product-8.jpg",
      title: "Water Hose 40cm",
      rating: 3,
      reviews: 19,
      price: 1850.00,
      category: "Electrical",
      instock: true,
      gallery: [
        {
          img: 'assets/product-1.jpg',
          hash: "one"
        },
        {
          img: 'assets/product-2.jpg',
          hash: "two"
        },
        {
          img: 'assets/product-3.jpg',
          hash: "three"
        },
        {
          img: 'assets/product-4.jpg',
          hash: "four"
        },
        {
          img: 'assets/product-5.jpg',
          hash: "five"
        }
      ]
    },
    {
      id: 9,
      img: "assets/product-8.jpg",
      title: "Water Hose 40cm",
      rating: 3,
      reviews: 19,
      price: 1850.00,
      category: "Plumbing",
      instock: true,
      gallery: [
        {
          img: 'assets/product-1.jpg',
          hash: "one"
        },
        {
          img: 'assets/product-2.jpg',
          hash: "two"
        },
        {
          img: 'assets/product-3.jpg',
          hash: "three"
        },
        {
          img: 'assets/product-4.jpg',
          hash: "four"
        },
        {
          img: 'assets/product-5.jpg',
          hash: "five"
        }
      ]
    },
    {
      id: 10,
      img: "assets/product-8.jpg",
      title: "Water Hose 40cm",
      rating: 3,
      reviews: 19,
      price: 1850.00,
      category: "Plumbing",
      instock: true,
      gallery: [
        {
          img: 'assets/product-1.jpg',
          hash: "one"
        },
        {
          img: 'assets/product-2.jpg',
          hash: "two"
        },
        {
          img: 'assets/product-3.jpg',
          hash: "three"
        },
        {
          img: 'assets/product-4.jpg',
          hash: "four"
        },
        {
          img: 'assets/product-5.jpg',
          hash: "five"
        }
      ]
    },
    {
      id: 11,
      img: "assets/product-8.jpg",
      title: "Water Hose 40cm",
      rating: 3,
      reviews: 19,
      price: 1050.00,
      category: "Gadgets",
      instock: true,
      gallery: [
        {
          img: 'assets/product-1.jpg',
          hash: "one"
        },
        {
          img: 'assets/product-2.jpg',
          hash: "two"
        },
        {
          img: 'assets/product-3.jpg',
          hash: "three"
        },
        {
          img: 'assets/product-4.jpg',
          hash: "four"
        },
        {
          img: 'assets/product-5.jpg',
          hash: "five"
        }
      ]
    },
    {
      id: 12,
      img: "assets/product-8.jpg",
      title: "Water Hose 40cm",
      rating: 3,
      reviews: 19,
      price: 1850.00,
      category: "Gadgets",
      instock: true,
      gallery: [
        {
          img: 'assets/product-1.jpg',
          hash: "one"
        },
        {
          img: 'assets/product-2.jpg',
          hash: "two"
        },
        {
          img: 'assets/product-3.jpg',
          hash: "three"
        },
        {
          img: 'assets/product-4.jpg',
          hash: "four"
        },
        {
          img: 'assets/product-5.jpg',
          hash: "five"
        }
      ]
    },
  ];

  getFeaturedProducts(){
    return this.featuredProducts;
  }
}

