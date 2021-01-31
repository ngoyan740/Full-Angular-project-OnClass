import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShorcutPipe } from './shorcut/shorcut.pipe';



@NgModule({
  declarations: [ShorcutPipe],
  imports: [
    CommonModule
  ],
  exports : [ShorcutPipe]
})
export class PipeModule { }
