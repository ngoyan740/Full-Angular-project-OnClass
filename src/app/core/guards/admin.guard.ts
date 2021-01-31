import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree, Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {

  constructor(private auth: AuthService, private router : Router) {};

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

      // Kết nối AuthService lấy biến currentUser và kiểm tra 
      const currentUser = this.auth.currentUser?.value
      
      if (currentUser) {
        // currentUser có tồn tại
         if(currentUser.maLoaiNguoiDung === 'QuanTri') {
           return true;
         }

         // đã đăng nhập nhưng maLoaiNguoiDung khác 'QuanTri', sau đó redirect về trang Home
         this.router.navigateByUrl("/")
         return false 
      }

      // Chưa đăng nhập, redirect vầ trang Log In 
      this.router.navigateByUrl("/log-in")
    return false; // cho phép truy cập vào route nếu return = 'true'
  }
}
