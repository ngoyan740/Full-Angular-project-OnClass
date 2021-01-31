import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// import thư viện @Input
// import thư viện @EventEmitter  tạo custom event
//import thư viện Output : đẩy & kích hoạt event lên component cha, và luôn đi chung với @EventEmitter


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  //Khai báo nhận dự liệu từ component cha truyền xuống (cha : movie-list)

  @Input() movieItem : any;


  // EventEmitter : định nghĩa ra 1 custom event
  // Output : đẩy event lên component cha
  @Output() onDelete = new EventEmitter();

  handleDeleteMovie() {
    // Cần truyền id của movie lên component cha là movie-list 
          // emit: Kích hoạt sự kiện
          // Note : emit chỉ nhận được 1 value thôi

      this.onDelete.emit(this.movieItem.id);


  }


  constructor() { }

  ngOnInit(): void {
  }

}
