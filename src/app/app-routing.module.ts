import { NgModule } from '@angular/core';
import { SignupComponent } from './Auth/component/signup/signup.component';
import { LoginComponent } from './Auth/component/login/login.component';
import { Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  { path: "register", component: SignupComponent},
  { path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
