import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionAspirantesComponent } from './seleccion-aspirantes.component';

describe('SeleccionAspirantesComponent', () => {
  let component: SeleccionAspirantesComponent;
  let fixture: ComponentFixture<SeleccionAspirantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionAspirantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionAspirantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
