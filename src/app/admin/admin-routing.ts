//leaves-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

import { ErrorComponent } from '../error/error.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
    // lazy loading
    {
        path: '', component: AdminComponent,
        children: [{ path: 'User', component: UserComponent }, { path: 'Profile', component: ProfileComponent }]
    },
    // ease loading 
    // { path: 'Admin', component: AdminComponent },
    // { path: 'User', component: UserComponent },
    //  { path: 'Profile', component: ProfileComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
