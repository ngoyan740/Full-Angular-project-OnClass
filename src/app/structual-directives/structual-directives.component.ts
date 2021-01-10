import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structual-directives',
  templateUrl: './structual-directives.component.html',
  styleUrls: ['./structual-directives.component.scss']
})
export class StructualDirectivesComponent implements OnInit {

  isActive : boolean = true;
  isLogin : boolean = true;

  dssv : any[] = [
    {hoTen: "Kim", lop: "FE54"},
    {hoTen: "Mi", lop: "FE54"},
    {hoTen: "Zi", lop: "FE54"},


  ];

  constructor() { }

  ngOnInit(): void {
  }

  color: string = 'danger';


}
