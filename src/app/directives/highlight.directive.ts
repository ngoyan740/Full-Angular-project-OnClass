import { Directive, ElementRef, HostListener } from '@angular/core';



@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


  // Khai báo ElementRef trong constructor 
  constructor(private elementRef: ElementRef) {

    this.elementRef.nativeElement.style.backgroundColor = 'red';

   }

   @HostListener('mouseenter') handleMouseEnter() {
     //Thêm style
    this.elementRef.nativeElement.style.backgroundColor = 'Yellow';
    this.elementRef.nativeElement.style.fontSize = '24px';
    this.elementRef.nativeElement.style.color = 'black';

    //Thêm Class
    this.elementRef.nativeElement.classList.add('active')

   }

   @HostListener('mouseleave') handleMouseLeave(){
     this.elementRef.nativeElement.style.backgroundColor = 'blue';
     this.elementRef.nativeElement.style.color = 'white';

   }

   @HostListener('click') handleClick() {
      this.elementRef.nativeElement.classList.remove('w-25');
      this.elementRef.nativeElement.classList.add('w-100');

       // Cách lấy width và height của 1 element
      console.log(this.elementRef.nativeElement.clientWidth);
      console.log(this.elementRef.nativeElement.clientHeight);

   }

  
   


}
