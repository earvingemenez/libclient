import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XsrfService } from './xsrf.service';
import { AuthTokenService } from './auth-token.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [XsrfService, AuthTokenService]
})
export class InterceptorsModule { }
