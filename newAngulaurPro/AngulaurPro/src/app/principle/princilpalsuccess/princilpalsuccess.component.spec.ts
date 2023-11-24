import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincilpalsuccessComponent } from './princilpalsuccess.component';

describe('PrincilpalsuccessComponent', () => {
  let component: PrincilpalsuccessComponent;
  let fixture: ComponentFixture<PrincilpalsuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincilpalsuccessComponent]
    });
    fixture = TestBed.createComponent(PrincilpalsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
