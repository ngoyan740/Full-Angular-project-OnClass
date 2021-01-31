import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatVeXeComponent } from './dat-ve-xe.component';
import { DsachGheComponent } from './dsach-ghe/dsach-ghe.component';
import { GheComponent } from './ghe/ghe.component';
import { DsachGheDaDatComponent } from './dsach-ghe-da-dat/dsach-ghe-da-dat.component';
import {DatVeXeRoutingModule} from  './datvexe-routing.module'



@NgModule({
  declarations: [DatVeXeComponent, DsachGheComponent, GheComponent, DsachGheDaDatComponent],
  imports: [
    CommonModule,
    DatVeXeRoutingModule
  ],
  exports: [DatVeXeComponent]
})
export class DatVeXeModule { }
