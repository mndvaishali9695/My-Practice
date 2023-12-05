import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnerSigUpComponent } from './oner-sig-up.component';

describe('OnerSigUpComponent', () => {
  let component: OnerSigUpComponent;
  let fixture: ComponentFixture<OnerSigUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnerSigUpComponent]
    });
    fixture = TestBed.createComponent(OnerSigUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
