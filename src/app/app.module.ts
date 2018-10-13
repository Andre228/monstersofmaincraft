import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import {AppRoutingModule, routes} from "./app-routing.module";
import {SignUpComponent} from "./sign-up/sign-up.component";
import { AuthComponent } from './auth/auth.component';
import { MonstersDetailsComponent } from './monsters-details/monsters-details.component';
import {MonsterService} from "./monster-service";
import { UserDetailsComponent } from './user-details/user-details.component';
import {UserService} from "./user-service";
import {SearchPipe} from "./home-page/search-pipe";
import { UsersPipe} from "./home-page/search-users-pipe";
import {AuthGuardService} from "./auth-guard";




@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomePageComponent,
    AuthComponent,
    MonstersDetailsComponent,
    UserDetailsComponent,
    SearchPipe,
    UsersPipe



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule

  ],
  providers: [MonsterService, UserService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
