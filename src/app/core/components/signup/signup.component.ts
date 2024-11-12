import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {
  GoogleSignInButtonComponent
} from '../../../shared/components/google-sign-in-button/google-sign-in-button.component';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FormValidationErrorComponent} from '../form-validation-error/form-validation-error.component';
import {validateEqualityOf} from '../../validators/validate-equality-of.validator';
import {AuthService} from '../../services/auth.service';
import {GoogleSignInComponent} from '../google-sign-in/google-sign-in.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    RouterLink,
    GoogleSignInButtonComponent,
    ReactiveFormsModule,
    FormValidationErrorComponent,
    GoogleSignInComponent
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, protected authService: AuthService) {
    this.signupForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });

    this.signupForm.setValidators(() => validateEqualityOf(this.signupForm.get('password')!, this.signupForm.get('confirmPassword')!, {"notEqual": "Passwords don't match"}));
  }

  onSubmit() {
    this.authService.signUp(this.signupForm.value);
  }
}
