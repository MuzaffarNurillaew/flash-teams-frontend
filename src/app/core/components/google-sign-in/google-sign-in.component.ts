import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.development';
import {AuthService} from '../../services/auth.service';
import {NavigationService} from '../../services/navigation.service';

declare const google: any;

@Component({
  selector: 'app-google-sign-in',
  standalone: true,
  imports: [],
  template: `<div id="googleButton" class="g_id_signin"></div>`,
  styleUrl: './google-sign-in.component.css'
})
export class GoogleSignInComponent implements OnInit {
  constructor(private authService: AuthService, private navigationService: NavigationService) {
  }

  ngOnInit(): void {
    this.initializeGoogleButton();
  }

  private initializeGoogleButton() {
    google.accounts.id.initialize({
      client_id: environment.googleClientId,
      callback: (response: any) => {
        this.handleGoogleResponse(response);
      },
    });

    google.accounts.id.renderButton(
      document.getElementById("googleButton"),
      {
        theme: "outline",
        size: "large",
        width: "269",
        text: "continue_with"
      }
    );
  }

  private handleGoogleResponse(response: any) {
    const token = response.credential;

    this.authService.signInWithGoogle$({ token })
      .subscribe((result) => {
        if (result) {
          console.log("GoogleSignInComponent: handleGoogleResponse: result: ", result);
          this.navigationService.navigateToUrl("login/set-password");
        }
      });
  }
}
