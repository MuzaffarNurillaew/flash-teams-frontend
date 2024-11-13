import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {
  GoogleSignInButtonComponent
} from '../../../shared/components/google-sign-in-button/google-sign-in-button.component';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {FormValidationErrorComponent} from '../form-validation-error/form-validation-error.component';
import {LoginModel} from '../../models/auth/login.model';
import {AuthService} from '../../services/auth.service';
import {GoogleSignInComponent} from '../google-sign-in/google-sign-in.component';
import {RoutingService} from '../../services/routing.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    GoogleSignInButtonComponent,
    ReactiveFormsModule,
    NgIf,
    FormValidationErrorComponent,
    GoogleSignInComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, protected authService: AuthService, private navigationService: RoutingService) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    let loginDto: LoginModel = this.loginForm.value;
    this.authService.login(loginDto).subscribe((result) => {
      if (result) {
        this.navigationService.navigateToReturnUrl();
      }
    });
  }
}
