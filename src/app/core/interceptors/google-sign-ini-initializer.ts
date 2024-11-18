import {AuthService} from '../services/auth.service';
import {environment} from '../../../environments/environment.development';
declare const google: any;

export function initializeGsi(authService: AuthService){
  console.log("initgsi")
  google.accounts.id.initialize({
    client_id: environment.googleClientId,
    callback: (response: any) => authService.signInWithGoogle$({ token: response.credential })
  });
}

export function init() {
  console.log('init');
}
