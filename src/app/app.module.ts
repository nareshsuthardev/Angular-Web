import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { EmployeeDeatilComponent } from './employee/employee-deatil/employee-deatil.component';
import { AppRoutingModule } from '../app/my-routes/app-routes'
import { AuthService } from './services/auh.service';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { LoaderComponent } from './loader/loader.component';
import { CanDeactivateGuardService } from './services/guards/candeactivate.guard.service';
import { LoginComponent } from './login/login.component';
import { SenderComponent } from './sender/sender.component';
import { ReciverComponent } from './reciver/reciver.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './admin/user/user.component';
import { PreloadModuleComponent } from './preload-module/preload-module.component';
import { CustomPreloadingStrategy } from './PreloadingStrategy/CustomPreloadingStrategy ';
import { ChatsComponent } from './chats/chats.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SignupComponent } from './signup/signup.component';
import { ObserverComponent } from './observer/observer.component'
import { GetInterceptor } from './Interceptor/getInterceptor.interceptor';
// const AppRoute: Routes = [
//   // {
//   //   path: '', component: HomeComponent
//   // },
//   {
//     path: 'Home', component: HomeComponent
//   },
//   // {
//   //   path: 'Employee', component: EmployeeComponent
//   // },
//   // {
//   //   path: 'Employee/:id/:name', component: EmployeeComponent
//   // }
//   {
//     path: 'Employee', component: EmployeeComponent, children: [{ path: ':pagename/:id/:name', component: EmployeeDeatilComponent }]
//   }
//   ,
//   {
//     path: 'product', component: ProductComponent
//   },
//   {
//     path: '**', component: ErrorComponent,
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    ProductComponent,
    NavComponent,
    EmployeeDeatilComponent,
    LoaderComponent,
    LoginComponent,
    SenderComponent,
    ReciverComponent,
    ChatsComponent,
    CartComponent,
    AddproductComponent,
    SignupComponent,
    ObserverComponent,
    /// for easing load
    //   AdminComponent,
    //   UserComponent,
    //  PreloadModuleComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    // RouterModule.forRoot(AppRoute),
    AppRoutingModule,

  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:GetInterceptor,multi:true},
    AuthService, AuthGuardService, CanDeactivateGuardService, CustomPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
