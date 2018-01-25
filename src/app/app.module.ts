import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UIRouterModule } from '@uirouter/angular';

import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';

import { CommonsModule } from './commons/commons.module';
import { UsersModule } from './components/users/users.module';
import { PartialsModule } from './components/partials/partials.module';

import { XsrfService } from './commons/services/interceptors/xsrf.service';
import { AuthTokenService } from './commons/services/interceptors/auth-token.service';

import { rootStates } from './states/root.states';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({otherwise: '/login', states: rootStates}),
    HttpClientModule,
    FormsModule,

    CommonsModule,
    UsersModule,
    PartialsModule

  ],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: XsrfService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
