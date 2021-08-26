import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component/login.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {path: "", redirectTo: 'login'},
  {path: 'login', component: LoginComponent}
]
@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent
  ]
})
export class AuthenticationModule {

}
