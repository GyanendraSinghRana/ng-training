import { Component } from "@angular/core";

@Component({
    selector: 'event-binding',
    template: `<div class="main">
                    <h3>Event Binding</h3>
                    <img [src]="angularLogo" 
                        (click)="onLogoClick($event)"/>
                    <br>
                    <button [disabled]="buttonStatus" 
                            (click)="updateBtnStatus($event)">
                                My Button
                    </button>
                </div>`,
    styles: ['.main { background-color: #ccc } img{ cursor:pointer }']
})

export class EventBindingComponent {
    angularLogo = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
    buttonStatus = false;

    updateBtnStatus(event:any){
        this.buttonStatus = true;
        console.log("the button is disabled");
    }

    onLogoClick(event:any){
        this.buttonStatus = false;
        console.log("the button is enabled");
    }
}