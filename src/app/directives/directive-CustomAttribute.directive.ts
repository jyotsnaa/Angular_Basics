import { Directive, ElementRef, Input, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector:'[customAtrributeDirective]'
})
export class DirectiveCustomAttribute {

    //ElementRef,Renderer service (S is class which is use to write funct that can be 
    //use in multiple component) in Angular

    //Hostelement - element in whch apply custom attribute - <div> in this case
   // HostListener - allow us to capture event raised in hostelement - OnMouseHover, OnMouseClick, OnMouseLeave
    //hostbinding - allows you to hanle propeties of hostelement in the customattribute directives-  border, style

    @HostBinding('style.border') border: string;

    color : string ='pink';
    constructor(private el: ElementRef, private re: Renderer ){
      this.changeBgColor(this.color);
    }

    @HostListener('mouseover')
    OnMouseHover(){
        this.changeBgColor('red');
        this.border ='5px solid green'
    }

    @HostListener('click')
    OnMouseClick(){
        window.alert( "Attribute Directive Click ")
    }

    @HostListener('mouseleave')
    OnMouseLeave(){
        this.changeBgColor('black');
        this.border =null
    }


    changeBgColor(color: string){
        this.re.setElementStyle(this.el.nativeElement,'color', color);
      //  this.el.nativeElement.style.color = color;
    }

}

