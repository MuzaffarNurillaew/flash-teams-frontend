import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPasswordFirstTimeComponent } from './set-password-first-time.component';

describe('SetPasswordFirstTimeComponent', () => {
  let component: SetPasswordFirstTimeComponent;
  let fixture: ComponentFixture<SetPasswordFirstTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetPasswordFirstTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetPasswordFirstTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
