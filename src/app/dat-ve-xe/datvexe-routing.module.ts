import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DatVeXeComponent} from './dat-ve-xe.component'


const routes: Routes = [
 {path:"", component: DatVeXeComponent},
];

@NgModule({
    //Sửa thành forChild. forRoot chỉ dành cho appRouting
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatVeXeRoutingModule { }
