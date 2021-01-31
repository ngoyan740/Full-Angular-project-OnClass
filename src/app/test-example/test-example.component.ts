import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-example',
  templateUrl: './test-example.component.html',
  styleUrls: ['./test-example.component.scss']
})
export class TestExampleComponent implements OnInit {

  message: string = 'Hello world';
  isActive: boolean = true;
  realNumber: number = 18;


  handleChangeMessage() {
    alert('Clicked');

  }



  constructor() { }

  ngOnInit(): void {
  }

}
