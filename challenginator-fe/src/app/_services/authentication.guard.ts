import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';

import {TokenStorageService} from "./token-storage.service";
import {catchError, map} from "rxjs/operators";
import {error} from "@angular/compiler/src/util";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private tokenStorage: TokenStorageService, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean | UrlTree {
    if (this.tokenStorage.isLoggedIn()) return true;
    else return this.router.createUrlTree(['login']);


    }

}
