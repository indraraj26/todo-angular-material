import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivate } from '@angular/Router';

export interface canComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean 
}
export class FormGuard implements CanDeactivate<canComponentDeactivate> {
 
   canDeactivate(component: canComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
       return component.canDeactivate()
   }
}