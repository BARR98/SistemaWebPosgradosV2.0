import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPerfilesComponent } from './general-perfiles.component';

describe('GeneralPerfilesComponent', () => {
  let component: GeneralPerfilesComponent;
  let fixture: ComponentFixture<GeneralPerfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralPerfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
