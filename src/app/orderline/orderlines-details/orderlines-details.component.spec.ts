import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlinesDetailsComponent } from './orderlines-details.component';

describe('OrderlinesDetailsComponent', () => {
  let component: OrderlinesDetailsComponent;
  let fixture: ComponentFixture<OrderlinesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderlinesDetailsComponent]
    });
    fixture = TestBed.createComponent(OrderlinesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
