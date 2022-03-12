import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasTesisComponent } from './caracteristicas-tesis.component';

describe('CaracteristicasTesisComponent', () => {
  let component: CaracteristicasTesisComponent;
  let fixture: ComponentFixture<CaracteristicasTesisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaracteristicasTesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristicasTesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
