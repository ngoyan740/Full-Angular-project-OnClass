import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  @ViewChild('signupForm') signupForm!: NgForm;
  // @ViewChild('signupForm') signupForm : NgForm | undefined;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}
  handleSignup() {
    // Cách 1: truyền cho nó 1 param của NgForm là #signupForm
    // Cách 2 : Sử dụng ViewChild
    console.log(this.signupForm.value);

    if (this.signupForm.invalid) return; // Phòng trường hợp inspect code

    this.auth.signup(this.signupForm.value).subscribe({
      error: (err) => {
        console.log(err.error);
      },
      complete: () => {
        //Redirect sang trang log in
        // Import Router
        this.router.navigateByUrl('/log-in');
      },
    });
  }
}
