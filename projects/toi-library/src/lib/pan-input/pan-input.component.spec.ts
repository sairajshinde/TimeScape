import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanInputComponent } from './pan-input.component';

describe('PanInputComponent', () => {
  let component: PanInputComponent;
  let fixture: ComponentFixture<PanInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
