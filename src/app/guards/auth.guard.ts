import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (!user.rolId) {
      this.router.navigate(['/auth/login']);
      return false;
    }

    const allowedRoles = route.data['roles'] as number[];

    if (allowedRoles && !allowedRoles.includes(user.rolId)) {
      this.router.navigate(['/auth/login']);
      return false;
    }

    return true;
  }
}
