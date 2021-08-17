import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  constructor(private router: Router, private authenticationService: AuthenticationService) {

  }
  login(){
    this.authenticationService.loginUser();
    this.router.navigate(['']);
  }
}
