import { Component, OnInit, ViewChild } from '@angular/core';
import {DsachGheDaDatComponent} from './dsach-ghe-da-dat/dsach-ghe-da-dat.component';
import {DsachGheComponent} from './dsach-ghe/dsach-ghe.component';

@Component({
  selector: 'app-dat-ve-xe',
  templateUrl: './dat-ve-xe.component.html',
  styleUrls: ['./dat-ve-xe.component.scss']
})
export class DatVeXeComponent implements OnInit {

  @ViewChild('dsachGheDaDat') dsGheDaDatComponent!: DsachGheDaDatComponent;
  @ViewChild('danhSachGhe') dsGheCompoment!: DsachGheComponent;


  chonGhe(ghe:any) {
    this.dsGheDaDatComponent.chonGhe(ghe);

  }

  huyGhe(soGhe:number) {
    this.dsGheCompoment.huyGhe(soGhe);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
