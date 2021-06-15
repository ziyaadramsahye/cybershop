import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellerProductsComponent } from './bestseller-products.component';

describe('BestsellerProductsComponent', () => {
  let component: BestsellerProductsComponent;
  let fixture: ComponentFixture<BestsellerProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestsellerProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestsellerProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
