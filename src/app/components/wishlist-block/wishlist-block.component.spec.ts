import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistBlockComponent } from './wishlist-block.component';

describe('WishlistBlockComponent', () => {
  let component: WishlistBlockComponent;
  let fixture: ComponentFixture<WishlistBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
