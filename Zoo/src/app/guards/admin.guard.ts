import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './../services/user.service';
import { Constants } from './../constants/constants';
import { constants } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    const identity = this.userService.getIdentity();

    if (identity && identity.role === Constants.ROLE_ADMIN) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
  
}
