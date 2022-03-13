import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMasterImagesComponent } from './view-master-images.component';

describe('ViewMasterImagesComponent', () => {
  let component: ViewMasterImagesComponent;
  let fixture: ComponentFixture<ViewMasterImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMasterImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMasterImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
