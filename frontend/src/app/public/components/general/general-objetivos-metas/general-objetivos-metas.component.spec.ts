import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralObjetivosMetasComponent } from './general-objetivos-metas.component';

describe('GeneralObjetivosMetasComponent', () => {
  let component: GeneralObjetivosMetasComponent;
  let fixture: ComponentFixture<GeneralObjetivosMetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralObjetivosMetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralObjetivosMetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
