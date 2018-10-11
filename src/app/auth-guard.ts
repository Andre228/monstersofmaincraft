import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {User} from "./user";


@Injectable()
export class AuthGuardService implements CanActivate {


  constructor( public router: Router) {}
  canActivate(): boolean {
    let user: User = JSON.parse(sessionStorage.getItem('hois'));
    if (!user) {
      this.router.navigate(["auth"]);
      return false;
    }
    return true;
  }
}
