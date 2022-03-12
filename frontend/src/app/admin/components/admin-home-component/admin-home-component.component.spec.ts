import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeComponentComponent } from './admin-home-component.component';

describe('AdminHomeComponentComponent', () => {
  let component: AdminHomeComponentComponent;
  let fixture: ComponentFixture<AdminHomeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
