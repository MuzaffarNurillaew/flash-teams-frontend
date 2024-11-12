import {HttpHeaders, HttpInterceptorFn} from '@angular/common/http';

export const contentTypeInterceptor: HttpInterceptorFn = (req, next) => {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  const clonedRequest = req.clone({ setHeaders: { "Content-Type": "application/json" } });

  return next(clonedRequest);
};
