import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './services/auth/auth.module';
import { InterceptorsModule } from './services/interceptors/interceptors.module';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    InterceptorsModule
  ],
  declarations: [],
  providers: [
    { provide: 'Window', useValue: window }
  ]
})
export class CommonsModule { }
