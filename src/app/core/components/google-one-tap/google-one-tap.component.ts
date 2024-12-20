import {AfterViewInit, Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment.development';
import {RoutingService} from '../../services/routing.service';
import {AuthService} from '../../services/auth.service';

declare const google: any;

@Component({
  selector: 'app-google-one-tap',
  standalone: true,
  imports: [],
  template: `<div id="g_id_onload"></div>`,
  styleUrl: './google-one-tap.component.css'
})
export class GoogleOneTapComponent implements AfterViewInit {
  constructor(private authService: AuthService, private navigationService: RoutingService) {
  }

    ngAfterViewInit(): void {
      if (!this.authService.isLoggedIn) {
        this.initializeGoogleOneTap();
      }
    }

  private initializeGoogleOneTap() {
    google.accounts.id.prompt();
  }

  private handleGoogleResponse(response: any) {
    const token = response.credential;

    this.authService.signInWithGoogle$({ token })
      .subscribe((result) => {
        if (result.isNewUser) {
          this.navigationService.navigateToUrl("login/set-password", { email: result.email });
        }
        else {
          this.navigationService.navigateToUrl("/home");
      }});
  }
}
