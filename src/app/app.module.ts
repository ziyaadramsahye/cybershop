import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { TopNavComponent } from './components/app-header/top-nav/top-nav.component';
import { SearchNavComponent } from './components/app-header/search-nav/search-nav.component';
import { MainNavComponent } from './components/app-header/main-nav/main-nav.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselBannerComponent } from './components/carousel-banner/carousel-banner.component';
import { FeaturesComponent } from './components/features/features.component';
import { FeatureComponent } from './components/features/feature/feature.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ProductComponent } from './components/featured-products/product/product.component';
import { RatingComponent } from './components/featured-products/product/rating/rating.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { ImageBannerComponent } from './components/image-banner/image-banner.component';
import { BestsellerProductsComponent } from './components/bestseller-products/bestseller-products.component';
import { BestProductComponent } from './components/bestseller-products/best-product/best-product.component';
import { BestProductRatingComponent } from './components/bestseller-products/best-product/best-product-rating/best-product-rating.component';
import { PopularCategoriesComponent } from './components/popular-categories/popular-categories.component';
import { CategoryCardComponent } from './components/popular-categories/category-card/category-card.component';
import { NewArrivalsComponent } from './components/new-arrivals/new-arrivals.component';
import { NewProductComponent } from './components/new-arrivals/new-product/new-product.component';

import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { NewsCardComponent } from './components/latest-news/news-card/news-card.component';
import { BrandsComponent } from './components/brands/brands.component';
import { OffersComponent } from './components/offers/offers.component';
import { OfferComponent } from './components/offers/offer/offer.component';
import { FooterComponent } from './components/footer/footer.component';

import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { WishlistBlockComponent } from './components/wishlist-block/wishlist-block.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartBlockComponent } from './components/cart-block/cart-block.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    TopNavComponent,
    SearchNavComponent,
    MainNavComponent,
    CarouselBannerComponent,
    FeaturesComponent,
    FeatureComponent,
    FeaturedProductsComponent,
    ProductComponent,
    RatingComponent,
    InputNumberComponent,
    ImageBannerComponent,
    BestsellerProductsComponent,
    BestProductComponent,
    BestProductRatingComponent,
    PopularCategoriesComponent,
    CategoryCardComponent,
    NewArrivalsComponent,
    NewProductComponent,
    LatestNewsComponent,
    NewsCardComponent,
    BrandsComponent,
    OffersComponent,
    OfferComponent,
    FooterComponent,
    HomeComponent,
    PagesComponent,
    WishlistComponent,
    BreadcrumbComponent,
    WishlistBlockComponent,
    CartComponent,
    CartBlockComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
