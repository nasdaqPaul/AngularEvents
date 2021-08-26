import {Injectable} from "@angular/core";

@Injectable()
export class AuthenticationService {
  private currentUser: any;

  loginUser(){
    this.currentUser = {
      id: 1,
      firstName: 'Silla',
      lastName: 'Montella'
    }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
