import { Routes } from '@angular/router';
import {LoginComponent} from './core/components/login/login.component';
import {SignupComponent} from './core/components/signup/signup.component';
import {DashboardComponent} from './core/components/dashboard/dashboard.component';
import {HomeComponent} from './core/components/home/home.component';
import {AuthGuard} from './core/guards/auth.guard';
import {
  SetPasswordFirstTimeComponent
} from './core/components/set-password-first-time/set-password-first-time.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login/set-password', component: SetPasswordFirstTimeComponent },
];
