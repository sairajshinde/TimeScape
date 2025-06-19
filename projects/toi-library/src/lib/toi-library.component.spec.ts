import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TOILibraryComponent } from './toi-library.component';

describe('TOILibraryComponent', () => {
  let component: TOILibraryComponent;
  let fixture: ComponentFixture<TOILibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TOILibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TOILibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
