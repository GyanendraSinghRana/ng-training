import { Directive, ElementRef, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[mouseactions]'
})

export class MouseActionsDirective implements OnInit {
    element:any;

    @Input() defaultColor:any;

    constructor(elementRef:ElementRef){
        //console.log("Element: ",elementRef.nativeElement);
        this.element = elementRef;
    }

    ngOnInit(){
        this.element.nativeElement.style.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseover') onmouseover(){
        this.element.nativeElement.style.backgroundColor = '#ccc';
    } 

    @HostListener('mouseout') onmouseout(){
        this.element.nativeElement.style.backgroundColor = '#fff';
    }

}