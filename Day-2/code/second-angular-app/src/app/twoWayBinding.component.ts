import { Component } from "@angular/core";

@Component({
    selector: 'twoway-binding',
    template: `<div>
                    <h3>Two-way data Binding</h3>
                    <input [(ngModel)]="myvar" />
                    <br>
                    <div>Product name: {{ myvar }}</div>
                    <br>
                    <input (keyup)="bindInputValue($event)"/>
                    <div>User Input:{{ userInput }} </div>
                </div>`
})

export class TwoWayBindingComponent {
    myvar:any = "abc";
    userInput:any;

    bindInputValue(event:any){
        this.userInput = event.currentTarget.value;
    }
}