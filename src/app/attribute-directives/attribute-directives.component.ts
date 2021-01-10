import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent implements OnInit {

  isActive : boolean = false; 

  bgColor : string = 'red';
  textColor: string = 'white';

  resultApi : string = `
  <p class="text-white bg-warning">Demo</p>
  `;


  imageUrl : string = 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg';
  
  constructor() { }

  ngOnInit(): void {
  }

}
