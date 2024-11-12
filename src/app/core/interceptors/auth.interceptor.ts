import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest
} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  console.log(token);
  if (token == null) {
    return next(req);
  }

  const clonedRequest = req.clone({
    setHeaders: {
      "Authorization": "Bearer " + token
    }
  });

  return next(clonedRequest);
};

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    console.log(token);

    if (token == null) {
      return next.handle(req);
    }

    const clonedRequest = req.clone({
      setHeaders: {
        "Authorization": `Bearer ${token}`
      }
    });

    return next.handle(clonedRequest);
  }
}
