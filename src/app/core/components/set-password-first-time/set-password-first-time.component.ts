import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {validateEqualityOf} from '../../validators/validate-equality-of.validator';
import {AuthService} from '../../services/auth.service';
import {FormValidationErrorComponent} from '../form-validation-error/form-validation-error.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-set-password-first-time',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormValidationErrorComponent,
  ],
  templateUrl: './set-password-first-time.component.html',
  styleUrl: './set-password-first-time.component.css'
})
export class SetPasswordFirstTimeComponent implements OnInit {
  passwordForm: FormGroup;
  protected email: string = '';

  constructor(private  fb: FormBuilder, protected authService: AuthService, private route: ActivatedRoute) {
    this.passwordForm = this.fb.group({
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    });

    this.passwordForm.setValidators(() => validateEqualityOf(this.passwordForm.get('password')!, this.passwordForm.get('confirmPassword')!, { notEqual: "Passwords don't match." }));
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
    });
  }

  setNewPassword() {
    const value: { password: string } = this.passwordForm.value;
    this.authService.setMyPasswordFirstTime$(value.password)
      .subscribe();
  }
}
