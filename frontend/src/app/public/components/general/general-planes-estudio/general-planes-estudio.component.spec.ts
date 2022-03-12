import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPlanesEstudioComponent } from './general-planes-estudio.component';

describe('GeneralPlanesEstudioComponent', () => {
  let component: GeneralPlanesEstudioComponent;
  let fixture: ComponentFixture<GeneralPlanesEstudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralPlanesEstudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPlanesEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
