//leaves-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy } from '@angular/router';


import { ErrorComponent } from '../error/error.component';
import { PreloadModuleComponent } from './preload-module.component';
import { Pre1Component } from './pre1/pre1.component';
import { Pre2Component } from './pre2/pre2.component';

const routes: Routes = [
    {
        path: '', component: PreloadModuleComponent,
        children: [{ path: 'Pre1', component: Pre1Component }, { path: 'Pre2', component: Pre2Component }]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PreloadRoutingModule { }
