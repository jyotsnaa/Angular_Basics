import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrductComponent } from './prduct.component';

describe('PrductComponent', () => {
  let component: PrductComponent;
  let fixture: ComponentFixture<PrductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
