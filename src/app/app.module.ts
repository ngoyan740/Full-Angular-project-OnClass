import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent} from './demo/demo.component';

// import {Baitap1Module } from './baitap1/baitap1.module';
import {Baitap2Module} from './baitap2/baitap2.module'

@NgModule({
  declarations: [
    //Nơi khai báo các Component được quản lý bởi module
    // AppComponent đang được AppModule quản lý


    AppComponent,
    DemoComponent
  ],
  imports: [

    // * Nơi khai báo các Module sẽ được sử dụng
    //  HomeModule : HeadereComponent, FooterComponent, ContentComponent
    // => để sử dụng các Component của HomeModule trong AppModule, cần phải gắn HomeModule vào trong imports

    // Những module do Angular cung cấp sẵn : RouterModule (để Routing trong Angular), FormsModule (hỗ trợ build Form), HttpClientModule (gọi API)


    BrowserModule,
    AppRoutingModule,
    // Baitap1Module,
    Baitap2Module
  ],
  providers: [
    // Nơi khai báo các services cần sử dụng



  ],
  bootstrap: [
    // Khai báo AppComponent là component khởi chạy đầu tiên của module
    // Các module khác do mình tự tạo sẽ ko có phần này

    AppComponent]
})
export class AppModule { }
