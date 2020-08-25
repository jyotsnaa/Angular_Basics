import { Directive, ElementRef, Input, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[appDirectiveCustom]'
})
export class DirectiveCustomDirective {

  private regEx: RegExp = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home'];

  constructor( private er: ElementRef, private rd: Renderer) {
   }

   maxLength :number = 16;

   @HostListener('keydown', ['$event'])
   onKeyPress(event: KeyboardEvent){

    if(this.specialKeys.indexOf(event.key) !== -1){
      return;
    }
    const current: string = this.er.nativeElement.value;

    const next: string = current.concat(event.key);
  
    if(next && !String(next).match(this.regEx) || (current.length && next.length > this.maxLength) ){
      event.preventDefault(); // rescrict from adding values
    }
   }

}
