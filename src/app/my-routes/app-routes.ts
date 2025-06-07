import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { EmployeeDeatilComponent } from "../employee/employee-deatil/employee-deatil.component";
import { EmployeeComponent } from "../employee/employee.component";
import { ProductComponent } from "../product/product.component";
import { ErrorComponent } from "../error/error.component";
import { NgModule } from "@angular/core";
import { AuthGuardService } from "../services/guards/auth-guard.service";
import { HomeComponent } from "../home/home.component";
import { CanDeactivateGuardService } from "../services/guards/candeactivate.guard.service";
import { AdminComponent } from "../admin/admin.component";
import { UserComponent } from "../admin/user/user.component";
import { ProfileComponent } from "../admin/profile/profile.component";
import { PreloadModuleComponent } from "../preload-module/preload-module.component";
import { Pre1Component } from "../preload-module/pre1/pre1.component";
import { Pre2Component } from "../preload-module/pre2/pre2.component";
import { CustomPreloadingStrategy } from "../PreloadingStrategy/CustomPreloadingStrategy ";
import { ChatsComponent } from "../chats/chats.component";
import { CartComponent } from "../cart/cart.component";
import { SignupComponent } from "../signup/signup.component";
import { Observable } from "rxjs";
import { ObserverComponent } from "../observer/observer.component";

const AppRoute: Routes = [
    // {  path: 'Employee', component: EmployeeComponent },
    // {  path: 'Employee/:id/:name', component: EmployeeComponent  }
    {
        // lazy loading
        path: 'Admin', loadChildren: () => import(`../admin/admin.module`).then(m => m.AdminModule),
        // ease loading
        // path: 'Admin', component: AdminComponent,
        // children: [{ path: 'User', component: UserComponent }, { path: 'Profile', component: ProfileComponent }]
    },
    // {
    //     path: 'Preload', component: PreloadModuleComponent, children: [{ path: 'Pre1', component: Pre1Component }, { path: 'Pre2', component: Pre2Component }]
    // },
    { path: 'preload-module', loadChildren: () => import(`../preload-module/preload-module.module`).then(m => m.PreloadModuleModule), data: { preload: true, delay: 5000 } },
    { path: 'Home', component: HomeComponent },
    {
        path: 'Employee', component: EmployeeComponent,
        // canActivate: [AuthGuardService],
        canActivateChild: [AuthGuardService],
        children: [{ path: ':pagename/:id/:name', component: EmployeeDeatilComponent, canDeactivate: [CanDeactivateGuardService] }]
    },
    { path: 'product', component: ProductComponent },
    { path: 'chats', component: ChatsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'observer', component: ObserverComponent },
    { path: '**', component: ErrorComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(AppRoute, {
        preloadingStrategy: CustomPreloadingStrategy  // preloading lazy loading is req
    }),


    ],
    exports: [RouterModule]
})
export class AppRoutingModule { };