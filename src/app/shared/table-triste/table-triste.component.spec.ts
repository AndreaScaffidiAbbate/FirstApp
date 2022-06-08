import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTristeComponent } from './table-triste.component';

describe('TableTristeComponent', () => {
  let component: TableTristeComponent;
  let fixture: ComponentFixture<TableTristeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTristeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTristeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
