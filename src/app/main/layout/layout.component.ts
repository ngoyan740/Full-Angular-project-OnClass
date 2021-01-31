import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {AuthService} from 'src/app/core/service/auth.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  currentUser: any = null;
  private currentUserSubscription!: Subscription

  constructor(private auth: AuthService) { }

  ngOnInit(): void {

    // Chỉ lấy được 1 lần duy nhất , khi currentUser trong Authenservice thay đổi thì ta sẽ ko lấy được value mới
    // this.currentUser = this.auth.currentUser.value;

    // Theo dõi thay đổi của biến currentUser trong service, mỡi lần currentUser thay đổi sẽ nhảy vào callback net và nhận đc giá trị mới 
    this.currentUserSubscription = this.auth.currentUser.asObservable().subscribe({
      next: (result : any) => {
        this.currentUser = result;
      }
    })
  }
  //ngOnDestroy : chạy trước khi component bị hủy
  // Hủy theo dõi biến currentUser khi component bị unmount : import OnDestroy, giải phóng vùng nhớ 
  ngOnDestroy() : void {
    this.currentUserSubscription?.unsubscribe()
  }

}
