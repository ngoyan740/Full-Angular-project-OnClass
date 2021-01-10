import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // tên component nhúng vào trong file html khác <app-root></app-root>
  
  templateUrl: './app.component.html', // Khai báo file html của component
  
  styleUrls: ['./app.component.scss'] //Khai báo file scss của component
})
export class AppComponent {
  title = 'projectangular';
}
