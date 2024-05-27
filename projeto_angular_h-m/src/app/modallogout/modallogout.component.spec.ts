import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModallogoutComponent } from './modallogout.component';

describe('ModallogoutComponent', () => {
  let component: ModallogoutComponent;
  let fixture: ComponentFixture<ModallogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModallogoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModallogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
