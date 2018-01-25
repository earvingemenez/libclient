import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';

import { MainnavComponent } from './mainnav/mainnav.component';

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule
  ],
  declarations: [MainnavComponent]
})
export class PartialsModule { }
