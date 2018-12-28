import { Component } from "@angular/core";

@Component({
    selector: 'property-binding',
    template: `<div class="main">
                    <h3>Property Binding: binding the src property of dom element img</h3>
                    <img src="{{ angularLogo }}"/>
                    <br>
                    <img [src]="angularLogo"/> 
                    <br>
                    <img bind-src="angularLogo"/>
                    <br>
                    <button [disabled]="buttonStatus">My Button</button>
                </div>`,
    styles: ['.main { background-color: #ccc }']
})

export class PropertyBindingComponent {
    angularLogo = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
    buttonStatus = true;
}