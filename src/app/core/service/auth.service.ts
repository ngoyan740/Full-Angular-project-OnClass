import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from "./api.service";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser:any = new BehaviorSubject(null);
  //todo BehavienSubject : lưu trữ giá trị, cung cấp thêm 1 hàm chuyển thành Observable

  // currentUser = value : không gán bằng như vậy dc
  // currentUser.next(value) => Set giá trị cho biến currentUser
  // currentUser.value => get giá trị của biến currentUser
  // TODO currentUser.asObservable => chuyển currentUser thành 1 Observable (có thể subscribe và tự động thay đổi, trả về data theo những thgian khác nhau)

  constructor(private api: ApiService) {}

  login(values: any): Observable<any> {
    const url =
      '/QuanLyNguoiDung/DangNhap';
    return this.api.post(url, values);
  }

  signup(values: any): Observable<any> {
    const url = '/QuanLyNguoiDung/DangKy';
    return this.api.post(url, { ...values, maNhom: 'GP01' });
  }
}
