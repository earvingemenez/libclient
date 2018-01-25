import { Injectable, Inject } from '@angular/core';

import { AUTH_STORAGE_KEY } from '../../../constants/index';

@Injectable()
export class SessionService {

  constructor(
    @Inject('Window') window: Window
  ) { }


  /* GET CURRENT USER
   * @desc  : get current user from local storage
   */
  getCurrentUser () {
    let sessionAuth = (<any>window).localStorage[AUTH_STORAGE_KEY];

    if (!sessionAuth)
      return null;

    try {
      return JSON.parse(sessionAuth);
    } catch (err) {
      return null;
    }
  }

  /* SET CURRENT USER
   * @desc  : set current user object into localstorage
   */
  setCurrentUser (user) {
    (<any>window).localStorage[AUTH_STORAGE_KEY] = JSON.stringify(user);
    return user;
  }

  /* REMOVE CURRENT USER
   * @desc. : disconnect currently logged in user to the app
   */
  unsetCurrentUser () {
    (<any>window).localStorage.removeItem(AUTH_STORAGE_KEY);
  }

}
