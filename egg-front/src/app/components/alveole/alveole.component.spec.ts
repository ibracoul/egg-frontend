import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlveoleComponent } from './alveole.component';

describe('AlveoleComponent', () => {
  let component: AlveoleComponent;
  let fixture: ComponentFixture<AlveoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlveoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlveoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
