import {contentTypeInterceptor} from './content-type.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor, authInterceptor} from './auth.interceptor';

export const interceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useValue: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useValue: contentTypeInterceptor, multi: true },
];
