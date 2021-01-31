import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/core/service/auth.service'

@Component({
  selector: 'app-root', // tên component nhúng vào trong file html khác <app-root></app-root>
  
  templateUrl: './app.component.html', // Khai báo file html của component
  
  styleUrls: ['./app.component.scss'] //Khai báo file scss của component
})
export class AppComponent implements OnInit {
  title = 'projectangular';
  constructor(private auth: AuthService) {}
  
  ngOnInit() {
    // const user = JSON.parse(localStorage.getItem('user') || "");
    const user = localStorage.getItem('user');

    if (user) {
      this.auth.currentUser.next(JSON.parse(user));
    }
  }
}


