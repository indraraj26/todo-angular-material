import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RouterGuard } from './service/router-guard.service';
import { AddComponent } from './user/add/add.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'home', component:HomeComponent, canActivate:[RouterGuard]},
  {path:'login', component: LoginComponent},
  {path:'add', component:AddComponent, canActivate:[RouterGuard]},
  {path:'user', component:UserComponent, canActivate:[RouterGuard]},
  {path:'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
