import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { StateService } from '@uirouter/angular';

import { SessionService } from './session.service';
import { AuthURL } from '../../../constants/endpoints';

@Injectable()
export class AuthService {

  constructor(
    private sessionService: SessionService,
    private http: HttpClient,
    private stateService: StateService
  ) { }

  private userUpdatedEvent = new Subject<string>();
  
  userUpdated$ = this.userUpdatedEvent.asObservable();
  errors: object;


  private handleError (err: any): Promise<any> {
    return Promise.reject(err.message || err);
  }


  /* GET CURRENT USER
   * @desc.  : get the user that is currently logged in
   */
  getCurrentUser (): any {
    return this.sessionService.getCurrentUser();
  }


  /* CHECK FOR AUTHENTICATED USER
   * @desc   : check is there is an authenticated user
   */
  isAuthenticated (): boolean {
    return this.getCurrentUser() ? true : false;
  }

  /* SET AUTHENTICATED USER
   * @desc   : set the user object as loggedin user
   */
  setAuthUser (user): void {
    this.sessionService.setCurrentUser(user);
  }

  /* UN-SET AUTHENTICATED USER
   * @desc   : remove authenticated user session
   */
  unsetAuthUser (): void {
    this.sessionService.unsetCurrentUser();
  }


  /* USER LOGIN
   * @desc   : enter user credentials and returns
   *           a generated token from the server.
   */
  login (data) {
    return this.http.post(AuthURL.API_SIGNIN_URL, data)
      .toPromise()
      .then(resp => {
        this.setAuthUser(resp);
        this.userUpdatedEvent.next('user:updated');

        return resp;
      })
      .catch(err => {
        return Promise.reject(err);
      })
    ;
  }

  /* USER LOGOUT
   * @desc   : clear user session and token
   */
  logout () {
    this.unsetAuthUser();
    this.stateService.go('signin');
  }

}
