import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dsach-ghe-da-dat',
  templateUrl: './dsach-ghe-da-dat.component.html',
  styleUrls: ['./dsach-ghe-da-dat.component.scss']
})
export class DsachGheDaDatComponent implements OnInit {

  @Output() onRemove = new EventEmitter();

  dsachGheDaDat: any[] = [];

  chonGhe(ghe:any) {
    if (ghe.dangChon) {
      this.dsachGheDaDat.push(ghe);
    } else {
      this.dsachGheDaDat = this.dsachGheDaDat.filter((item) => item.soGhe !== ghe.soGhe)
    }
  }


  huyGhe(soGhe: number) {
    this.dsachGheDaDat= this.dsachGheDaDat.filter((item) => item.soGhe !== soGhe);

    this.onRemove.emit(soGhe);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
