import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateService } from '@uirouter/angular';

import { SessionService } from '../../../commons/services/auth/session.service';
import { AuthService } from '../../../commons/services/auth/auth.service';

import { SignIn } from '../../../structs/signin.structs';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  creds = new SignIn("", "");
  errors: Object;

  email = "";

  constructor(
    private http: HttpClient,
    private sessionService: SessionService,
    private authService: AuthService,
    private stateService: StateService
  ) {
    this.authService.userUpdated$
      .subscribe(data => {
        this.hasAuthUser();
      })
  }

  ngOnInit() {
    this.hasAuthUser();
  }

  /* CHECKED LOGGED IN
   */
  hasAuthUser () {
    if (this.authService.isAuthenticated()) {
      console.log("has logged in");
      this.stateService.go('dashboard');
    }
  }

  /* LOGIN SUBMIT
   * @desc   : submit login credentials to the server
   */
  userSignIn (): void {
    let login = this.authService.login(this.creds);
    this.errors = {};

    login.catch(err => {
      this.errors = err.error;
      this.email = this.creds.email;
    })

    if (login)
      console.log('successfully logged in');
      this.stateService.go('dashboard');

  }

}