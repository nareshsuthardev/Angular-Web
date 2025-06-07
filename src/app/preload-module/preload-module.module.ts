import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadModuleComponent } from './preload-module.component';
import { Pre1Component } from './pre1/pre1.component';
import { Pre2Component } from './pre2/pre2.component';
import { PreloadRoutingModule } from './preload-routing';




@NgModule({
  declarations: [
  PreloadModuleComponent,
  Pre1Component,
  Pre2Component,
  ],
  imports: [
    CommonModule,
    PreloadRoutingModule,
  ]
})
export class PreloadModuleModule { }
