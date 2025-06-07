import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
import { AdminRoutingModule } from './admin-routing';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
   
    AdminComponent,
   // if componte defined in app main module then doent bed to define in sub module ----- ease loading
   UserComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
