import { TranslateService } from '@ngx-translate/core';
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotifierService } from "angular-notifier";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private _notifierService: NotifierService, private injector: Injector) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          const translateService = this.injector.get(TranslateService);
          this._notifierService.notify('error', translateService.instant(error.error));
          return of({});
        })
      )
  }
}