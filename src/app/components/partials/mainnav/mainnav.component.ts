import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

import { AuthService } from '../../../commons/services/auth/auth.service';


@Component({
  selector: 'app-mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.scss']
})
export class MainnavComponent implements OnInit {

  constructor(
    private stateService: StateService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  /* USER SIGNOUT
   * @desc   : triggers user signout
   */
  userSignOut (): void {
    this.authService.logout();
    this.stateService.go('signin');
  }
}
