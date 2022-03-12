import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneracionDetailComponent } from './generacion-detail.component';

describe('GeneracionDetailComponent', () => {
  let component: GeneracionDetailComponent;
  let fixture: ComponentFixture<GeneracionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneracionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneracionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
