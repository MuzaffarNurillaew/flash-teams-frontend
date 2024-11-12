import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSignInButtonComponent } from './google-sign-in-button.component';

describe('GoogleSignInButtonComponent', () => {
  let component: GoogleSignInButtonComponent;
  let fixture: ComponentFixture<GoogleSignInButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleSignInButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleSignInButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
