import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnerSuccessComponent } from './oner-success.component';

describe('OnerSuccessComponent', () => {
  let component: OnerSuccessComponent;
  let fixture: ComponentFixture<OnerSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnerSuccessComponent]
    });
    fixture = TestBed.createComponent(OnerSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
