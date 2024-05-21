import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuiconsComponent } from './menuicons.component';

describe('MenuiconsComponent', () => {
  let component: MenuiconsComponent;
  let fixture: ComponentFixture<MenuiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuiconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
