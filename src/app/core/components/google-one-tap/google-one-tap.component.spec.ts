import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleOneTapComponent } from './google-one-tap.component';

describe('GoogleOneTapComponent', () => {
  let component: GoogleOneTapComponent;
  let fixture: ComponentFixture<GoogleOneTapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleOneTapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleOneTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
