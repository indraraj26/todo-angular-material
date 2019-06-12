import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private  _loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }


  onSubmit() {
    this._loginService.subject.next(true)
    this._loginService.userLoggedIn = true;
    this.router.navigate(['/home'])
  }
}
