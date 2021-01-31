import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    // Thay đổi request
    const currentUser  = this.auth.currentUser.value;
    if (currentUser) {
      const {accessToken} = currentUser;
      request = request.clone({
        //clone request và thay đổi gì ghi ở đây
        headers: request.headers.append(
          'Authorization',
          `Bearer ${accessToken}`
        )
      })
    }
    return next.handle(request);
  }
}
