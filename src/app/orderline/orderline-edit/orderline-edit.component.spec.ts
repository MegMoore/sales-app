import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlineEditComponent } from './orderline-edit.component';

describe('OrderlineEditComponent', () => {
  let component: OrderlineEditComponent;
  let fixture: ComponentFixture<OrderlineEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderlineEditComponent]
    });
    fixture = TestBed.createComponent(OrderlineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
