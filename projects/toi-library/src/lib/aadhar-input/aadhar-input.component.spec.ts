import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadharInputComponent } from './aadhar-input.component';

describe('AadharInputComponent', () => {
  let component: AadharInputComponent;
  let fixture: ComponentFixture<AadharInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AadharInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AadharInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
