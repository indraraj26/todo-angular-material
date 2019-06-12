import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    public subject = new Subject<any>();

    private _userLoggedIn: boolean = false;


    set userLoggedIn(value: boolean) {
        this._userLoggedIn = value;
    }

    get userLoggedIn() {
        return this._userLoggedIn;
    }
}