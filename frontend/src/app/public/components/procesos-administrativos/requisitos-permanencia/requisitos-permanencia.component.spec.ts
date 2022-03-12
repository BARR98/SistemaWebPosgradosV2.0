import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitosPermanenciaComponent } from './requisitos-permanencia.component';

describe('RequisitosPermanenciaComponent', () => {
  let component: RequisitosPermanenciaComponent;
  let fixture: ComponentFixture<RequisitosPermanenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitosPermanenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitosPermanenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
