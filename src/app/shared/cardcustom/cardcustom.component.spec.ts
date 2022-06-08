import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcustomComponent } from './cardcustom.component';

describe('CardcustomComponent', () => {
  let component: CardcustomComponent;
  let fixture: ComponentFixture<CardcustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardcustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardcustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
