import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarduiComponent } from './cardui.component';

describe('CarduiComponent', () => {
  let component: CarduiComponent;
  let fixture: ComponentFixture<CarduiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarduiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarduiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
