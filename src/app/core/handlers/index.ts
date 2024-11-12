import {ErrorHandler} from '@angular/core';
import {GlobalErrorHandler} from './global-error-handler';

export const handlerProviders = [
  { provide: ErrorHandler, useClass: GlobalErrorHandler },
];
