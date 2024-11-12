import {ErrorHandler} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

export class GlobalErrorHandler implements ErrorHandler
{
  handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 400) {
        alert(error.error[0]["errorMessage"]);
      }
      else {
        alert(error.error["message"]);
      }
    }
  }
}
