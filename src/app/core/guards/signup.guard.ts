import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SignUpComponent } from "src/app/main/sign-up/sign-up.component";

@Injectable({
  providedIn: 'root',
})
export class SignupGuard implements CanDeactivate<SignUpComponent> {
  canDeactivate(
    component: SignUpComponent, //như ViewChild có thể truy cập phương thức thuộc tính của component đó
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      // kiểm tra form có thay đổi hay chưa 
      const isDirty = component.signupForm.dirty && !component.signupForm.submitted;
      if (isDirty) {
        const isConfirm = confirm('Bạn có muốn rời khỏi trang này ?, tất cả dữ liệu sẽ bị mất !');
        return isConfirm;
      };

      
      //DeActivate : cho phép rời khỏi route khi return về true
    return true;
  }
}
