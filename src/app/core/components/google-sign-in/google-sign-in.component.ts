import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.development';
import {AuthService} from '../../services/auth.service';
import {RoutingService} from '../../services/routing.service';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';
import {GoogleLoginProvider, GoogleSigninButtonModule, SocialAuthService, SocialUser} from '@abacritt/angularx-social-login';

declare const google: any;

@Component({
  selector: 'app-google-sign-in',
  standalone: true,
  imports: [
    GoogleSigninButtonModule
  ],
  templateUrl: "google-sign-in.component.html",
  styleUrl: './google-sign-in.component.css'
})
export class GoogleSignInComponent implements OnInit, AfterViewInit {
  private user: SocialUser | undefined;
  GoogleLoginProvider = GoogleLoginProvider;

  constructor(private authService: AuthService, private navigationService: RoutingService, private socialAuthService: SocialAuthService) {
    // socialAuthService.getAccessToken()
  }

  ngAfterViewInit(): void {
    google.accounts.id.initialize({
      client_id: environment.googleClientId,
      callback: (response: any) => this.handleGoogleResponse(response.credential)
    });
    google.accounts.id.renderButton(document.getElementById("gsi-btn"), {});
  }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      if (user) {
        console.log(user);
        this.handleGoogleResponse(user.idToken);
      }
      else {
        console.log("User is null")
      }
    });
  }

  private handleGoogleResponse(authToken: string): void {
    console.log("handleGoogleResponse");
    this.authService.signInWithGoogle$({ token: authToken })
      .subscribe((result) => {
        if (result.isNewUser) {
          this.navigationService.navigateToUrl("login/set-password", { email: result.email });
        }
        else {
          this.navigationService.navigateToUrl("/home");
        }});
  }

  loginWithGoogle() {

  }
}
