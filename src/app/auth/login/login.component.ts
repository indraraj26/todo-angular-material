import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { canComponentDeactivate } from '../../service/form-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, canComponentDeactivate {
  public submitted: boolean = true;
  
  constructor(private  _loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }


  onSubmit() {
   // this.submitted = true;
    this._loginService.subject.next(true)
    this._loginService.userLoggedIn = true;
    this.router.navigate(['/home'])
  }

  canDeactivate() : Observable<boolean> | Promise<boolean> | boolean  {
    if(!this.submitted) {
      return confirm('Do you want to discard your changes');
    } 
    return true;
  }
}
