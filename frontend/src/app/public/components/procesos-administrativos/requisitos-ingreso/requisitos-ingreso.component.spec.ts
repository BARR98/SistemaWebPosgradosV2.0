import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitosIngresoComponent } from './requisitos-ingreso.component';

describe('RequisitosIngresoComponent', () => {
  let component: RequisitosIngresoComponent;
  let fixture: ComponentFixture<RequisitosIngresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitosIngresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitosIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
