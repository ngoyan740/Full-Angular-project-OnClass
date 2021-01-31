import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class BookingGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Kết nối AuthService lấy biến currentUser và kiểm tra
    const currentUser = this.auth.currentUser.value;

    // debugger

    if (!currentUser) {
      (window as any).PATH = state.url; // Lưu trữ url hiện tại
      this.router.navigateByUrl('/log-in');
      return false;
    }

    // Lưu vào object window
    return true;
  }
}
