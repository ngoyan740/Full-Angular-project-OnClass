import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from "src/app/core/service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private auth: AuthService, private router : Router) {
    this.signInForm = new FormGroup({
      // Chứa nào ô input bên trong và có key
      taiKhoan: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      matKhau: new FormControl("", [
        Validators.required,
        //requiredTrue(yêu cầu khi muốn check 1 trường khác trong form trước )
        Validators.minLength(3),
        Validators.maxLength(20)
      ])
    });
  }

  ngOnInit(): void {}

  handleLogIn() {
    // console.log(this.signInForm.value);
    this.signInForm.markAllAsTouched(); // tự động show lỗi khi nhấn submit
    
    if(this.signInForm.invalid) return;

    this.auth.login(this.signInForm.value).subscribe({
      next: result => {

        //set lại value cho currentUser trong Authservice
        this.auth.currentUser.next(result);

        // Lưu xuống local Storage
        localStorage.setItem('user', JSON.stringify(result))

        const {maLoaiNguoiDung} = result;
        if ((window as any).PATH) {
          this.router.navigateByUrl((window as any).PATH);
          (window as any).PATH = null;
        } else if(maLoaiNguoiDung === 'QuanTri') {
          this.router.navigateByUrl('/admin');
        } else {
          this.router.navigateByUrl('/')
        }
      },
      error: (err) => {
        console.log(err.error);
        
      }
    })
    
  }
}
