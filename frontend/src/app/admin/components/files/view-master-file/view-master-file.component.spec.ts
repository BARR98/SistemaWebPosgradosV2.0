import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMasterFileComponent } from './view-master-file.component';

describe('ViewMasterFileComponent', () => {
  let component: ViewMasterFileComponent;
  let fixture: ComponentFixture<ViewMasterFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMasterFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMasterFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
