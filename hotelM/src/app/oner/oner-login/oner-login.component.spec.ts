import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnerLoginComponent } from './oner-login.component';

describe('OnerLoginComponent', () => {
  let component: OnerLoginComponent;
  let fixture: ComponentFixture<OnerLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnerLoginComponent]
    });
    fixture = TestBed.createComponent(OnerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
