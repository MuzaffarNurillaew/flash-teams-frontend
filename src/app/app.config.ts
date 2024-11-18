import {APP_INITIALIZER, ApplicationConfig, ErrorHandler, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {HTTP_INTERCEPTORS, provideHttpClient} from '@angular/common/http';
import {interceptorProviders} from './core/interceptors';
import {handlerProviders} from './core/handlers';
import {GoogleLoginProvider, SocialAuthServiceConfig} from '@abacritt/angularx-social-login';
import {environment} from '../environments/environment.development';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    interceptorProviders,
    handlerProviders,
    { provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.googleClientId, {
              oneTapEnabled: false,
              prompt: 'select_account'
            })
          }
        ],
        onError: (error: any) => {
          console.error(error);
        }
      } as SocialAuthServiceConfig
    },
  ]
};
