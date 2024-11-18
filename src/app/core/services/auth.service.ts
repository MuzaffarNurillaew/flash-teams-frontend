import {Injectable} from '@angular/core';
import {LoginModel} from '../models/auth/login.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';
import {AuthResultModel, GoogleAuthResultModel} from '../models/auth/auth-result.model';
import {UserCreationDto} from '../models/users/user-creation-dto';
import {TokenService} from './token.service';
import {Observable, tap} from 'rxjs';
import {Router} from '@angular/router';
import {GoogleAuthModel} from '../models/auth/google-auth.model';
import {SocialAuthService} from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private tokenService: TokenService, private router: Router, private socialAuthService: SocialAuthService) {
  }

  login(loginDto: LoginModel) {
    return this.http.post<AuthResultModel>(environment.apiUrl + environment.routes.auth.login, loginDto)
      .pipe(tap({
        next: (result) => {
          this.setToken(result.token);
        }
      }));
  }

  logout() {
    this.socialAuthService.signOut();
    this.deleteToken();
    this.router.navigate(['/login']);
  }

  signUp(userCreationDto: UserCreationDto) {
    let result$ = this.http.post<AuthResultModel>(environment.apiUrl + environment.routes.auth.signup, userCreationDto)
      .subscribe((result) => {
        this.setToken(result.token);
      });
  }

  signInWithGoogle$(googleAuthModel: GoogleAuthModel): Observable<GoogleAuthResultModel>  {
    return this.http.post<GoogleAuthResultModel>(environment.apiUrl + environment.routes.auth.googleSignIn, googleAuthModel)
      .pipe(tap({next: (result) => {
        this.setToken(result.token);
      }}));
  }

  getToken(): string | null {
    return this.tokenService.getToken();
  }

  setToken(token: string): void {
    this.tokenService.setToken(token);
  }

  deleteToken(): void {
    this.tokenService.deleteToken();
  }

  get isLoggedIn(): boolean {
    return this.tokenService.isTokenValid();
  }

  setMyPasswordFirstTime$(password: string) {
    return this.http.post(environment.apiUrl + environment.routes.users.setMyPasswordFirstTime, { password }, { headers: { Authorization: `Bearer ${this.getToken()}` } });
  }

  handleGoogleResponse(response: any) {
    const credential: string = response.credential;

  }
}
