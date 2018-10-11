import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";

import {NgModule} from "@angular/core";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {AuthComponent} from "./auth/auth.component";
import {MonstersDetailsComponent} from "./monsters-details/monsters-details.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {AuthGuardService} from "./auth-guard";

/**
 * Created by Fedot on 05.09.2018.
 */


export const routes: Routes =
  [
   // {path: '', component: HomePageComponent},
    { path: '', redirectTo: 'home-page', pathMatch: 'full',  canActivate: [AuthGuardService] },
    {path : 'sign-up', component: SignUpComponent},
    {path : 'home-page', component: HomePageComponent, canActivate: [AuthGuardService]},
    {path: 'auth', component: AuthComponent},
    {path: 'monster-details', component: MonstersDetailsComponent,  canActivate: [AuthGuardService]},
    {path: 'user-details', component: UserDetailsComponent,  canActivate: [AuthGuardService]}

  ];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
