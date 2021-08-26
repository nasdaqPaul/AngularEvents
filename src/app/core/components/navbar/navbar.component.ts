import {Component} from "@angular/core";
import {AuthenticationService} from "../../authentication.module/services/authentication.service";

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent {
  constructor(public authenticationService: AuthenticationService) {
  }
}
