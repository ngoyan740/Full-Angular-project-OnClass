import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {

  @Input() ghe: any;
  @Output() onSelect = new EventEmitter();

  dangChon: boolean = false;

  chonGhe() {
    this.dangChon = !this.dangChon;
    this.onSelect.emit({ ...this.ghe, dangChon: this.dangChon }); // lên dsach-ghe .html để lắng nghe sự kiện từ thằng cha

  }



  constructor() { }

  ngOnInit(): void {
  }



}
