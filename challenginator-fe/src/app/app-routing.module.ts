import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {InsertComponent} from "./insert/insert.component";
import {DetailsComponent} from "./details/details.component";
import {AuthenticationGuard} from "./_services/authentication.guard";
import {HistoryComponent} from "./dashboard/history/history.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', canActivate:[AuthenticationGuard], component: DashboardComponent},
  {path: 'insert', canActivate:[AuthenticationGuard], component: InsertComponent},
  {path: 'details/:challengeId',  canActivate:[AuthenticationGuard],component: DetailsComponent},
  {path: 'history', canActivate:[AuthenticationGuard], component:HistoryComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
