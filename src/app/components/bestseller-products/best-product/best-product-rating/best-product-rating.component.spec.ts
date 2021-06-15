import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestProductRatingComponent } from './best-product-rating.component';

describe('BestProductRatingComponent', () => {
  let component: BestProductRatingComponent;
  let fixture: ComponentFixture<BestProductRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestProductRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestProductRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
