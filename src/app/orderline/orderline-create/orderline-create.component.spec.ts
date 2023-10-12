import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlineCreateComponent } from './orderline-create.component';

describe('OrderlineCreateComponent', () => {
  let component: OrderlineCreateComponent;
  let fixture: ComponentFixture<OrderlineCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderlineCreateComponent]
    });
    fixture = TestBed.createComponent(OrderlineCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
