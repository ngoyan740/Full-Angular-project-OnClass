import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  message: string = 'hello';
  isActive: boolean = true;
  userName: string = 'Kimizi';
  email : string = '';

  handleChangeMessage(messageRef : HTMLInputElement) {
    // Chèn 'ElementRef' lên trên phía import. Nó là interface của Angular
    // Lấy giá trị mới của ô input user nhập vào
    console.log(messageRef);
    
    this.message = messageRef.value;
    console.log(this.message);
  };

  handleChangUsername (event: any) {
    console.log(event.target);
    // Target là thẻ input (thẻ nó đang tham chiếu tới)
    this.userName = event.target.value
    
  }


  constructor() { }

  ngOnInit(): void {
  }

}
