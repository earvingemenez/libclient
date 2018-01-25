import * as _ from "lodash";

import { Injectable, NgModule } from '@angular/core';
import { HttpEvent,
         HttpInterceptor,
         HttpHandler,
         HttpRequest,
         HttpResponse } from '@angular/common/http';
import { HttpErrorResponse } from "@angular/common/http";
import { StateService } from '@uirouter/angular';

import { map, filter, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { SessionService } from '../../../commons/services/auth/session.service';



@Injectable()
export class AuthTokenService implements HttpInterceptor {

  constructor(
    private sessionService: SessionService,
    private stateService: StateService
  ) {}

  /* INVALID USER AUTHENTICATED
   */
  invalidAuthentication () {
    this.sessionService.unsetCurrentUser();
    this.stateService.go('signin');
  }


  intercept (request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {

    const token = _.get(
      this.sessionService.getCurrentUser(),
      ['auth_token'],
      null
    )

    let authValue = !_.isNil(token) ? `Token ${token}` : '';
    let request2 = request.clone({ headers: request.headers.set('Authorization', authValue) });

    return next.handle(request2).pipe(
      tap(event => {
        if (event instanceof HttpResponse)
          return event;
        },
        err => {
          if (err instanceof HttpErrorResponse) {
            const has_details = _.has(err, ['error', 'detail']);

            if (err.status === 401 || (err.status === 403 && has_details && _.toLower(_.get(err, ['error', 'detail'])) === "invalid token.") ) {
              this.invalidAuthentication();
            }
          }// endif
        }
      )
    )

  }
}
