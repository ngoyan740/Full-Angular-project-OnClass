import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent} from './demo/demo.component';

// import {Baitap1Module } from './baitap1/baitap1.module';
import {Baitap2Module} from './baitap2/baitap2.module';
import { DataBindingComponent } from './data-binding/data-binding.component'
import{Baitap4Module} from './baitap4/baitap4.module';
import { StructualDirectivesComponent } from './structual-directives/structual-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
@NgModule({
  declarations: [
    //Nơi khai báo các Component được quản lý bởi module
    // AppComponent đang được AppModule quản lý


    AppComponent,
    DemoComponent,
    DataBindingComponent,
    StructualDirectivesComponent,
    AttributeDirectivesComponent
  ],
  imports: [

    // * Nơi khai báo các Module sẽ được sử dụng
    //  HomeModule : HeadereComponent, FooterComponent, ContentComponent
    // => để sử dụng các Component của HomeModule trong AppModule, cần phải gắn HomeModule vào trong imports

    // Những module do Angular cung cấp sẵn : RouterModule (để Routing trong Angular), FormsModule (hỗ trợ build Form), HttpClientModule (gọi API)


    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // Baitap1Module,
    Baitap2Module,
    Baitap4Module
    
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
