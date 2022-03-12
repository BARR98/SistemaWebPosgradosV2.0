import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitosEgresoComponent } from './requisitos-egreso.component';

describe('RequisitosEgresoComponent', () => {
  let component: RequisitosEgresoComponent;
  let fixture: ComponentFixture<RequisitosEgresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitosEgresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitosEgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
