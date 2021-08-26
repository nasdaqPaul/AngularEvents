import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";
import {FormGroup} from "@angular/forms";

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  emailAddress!: string;
  password!: string

  constructor(private router: Router, private authenticationService: AuthenticationService) {

  }
  login(form: any){
    // this.authenticationService.loginUser();
    // this.router.navigate(['']);

    console.log(form);
  }
}
