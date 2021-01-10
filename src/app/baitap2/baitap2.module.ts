import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { SliderComponent } from './slider/slider.component';
import { IndexcontentComponent } from './indexcontent/indexcontent.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import { Baitap2Component } from './baitap2.component';



@NgModule({
  declarations: [HeaderComponent, IndexComponent, SliderComponent, IndexcontentComponent, FooterComponent, ItemComponent, Baitap2Component],
  imports: [
    CommonModule
  ],
  exports : [
    Baitap2Component
  ]
})
export class Baitap2Module { }
