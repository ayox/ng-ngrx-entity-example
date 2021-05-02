import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTypesComponent } from './products-types.component';

describe('ProductsTypesComponent', () => {
  let component: ProductsTypesComponent;
  let fixture: ComponentFixture<ProductsTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
