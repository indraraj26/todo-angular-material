import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../auth/login/login.service';

@Injectable({
    providedIn:'root'
})
export class RouterGuard implements CanActivate {
    constructor(private _loginService: LoginService, private router: Router) {
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {    
           if(this._loginService.userLoggedIn) {
               return true;
           }
           this.router.navigate(['']);
           return false;
    }

}