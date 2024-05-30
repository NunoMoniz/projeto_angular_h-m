import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsapiComponent } from './productsapi.component';

describe('ProductsapiComponent', () => {
  let component: ProductsapiComponent;
  let fixture: ComponentFixture<ProductsapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
