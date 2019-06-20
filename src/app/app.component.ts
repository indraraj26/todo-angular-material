import { Component } from '@angular/core';
import { LoginService } from './auth/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material';
  opened: boolean;
  public showToolbar: boolean = false;

  constructor(private _loginService: LoginService) {

  }

  ngOnInit() {
   this._loginService.subject.subscribe(v => this.showToolbar = v)
  }
}
