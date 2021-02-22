import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor( private el: ElementRef ) { }

  @HostListener('focus') onFocus() {
    console.log('On Focus!');
  }
  @HostListener('blur') onBlur() {
    let value : string = this.el.nativeElement.value;

    this.el.nativeElement.value = value.toUpperCase();
    // console.log('On Blur!');
  }
  

}
