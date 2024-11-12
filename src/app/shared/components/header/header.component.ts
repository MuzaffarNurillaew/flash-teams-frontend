import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {AuthService} from '../../../core/services/auth.service';
import {GoogleOneTapComponent} from '../../../core/components/google-one-tap/google-one-tap.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    NgIf,
    GoogleOneTapComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen: boolean = false;

  constructor(protected authService: AuthService) { }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  onLogoutClicked() {
    this.authService.logout();
    alert('Logged out!')
  }
}