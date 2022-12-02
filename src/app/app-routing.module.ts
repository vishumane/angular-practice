
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { TestComponent} from './test/test.component';
import {LoginComponent} from './components/login/login.component'
import {SignupComponent} from './components/signup/signup.component'

const routes: Routes = [
  { path: 'test', component: TestComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }