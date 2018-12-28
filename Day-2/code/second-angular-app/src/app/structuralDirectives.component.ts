import { Component } from "@angular/core";

@Component({
    selector: 'structural-directives',
    template: `
                <h2>*ngIf</h2>
                <h3>ngIf checks whether the oneProduct object exists or not and if it does then it shown prodName attribute of the object
                </h3>
                <div *ngIf="oneProduct" class="name">
                    {{ oneProduct.prodName }}
                </div>

                <h2>*ngFor</h2>
                <h3>ngFor allows to iterate through the object array products.</h3>
                <ul>
                    <li *ngFor="let product of products">
                        {{ product.prodName }} - {{ product.prodVersion }}
                    </li>
                </ul>
                
                <h2>*ngSwitch</h2>
                <div *ngFor="let product of products">
                    <div [ngSwitch]="product.prodVersion">
                        <div *ngSwitchCase="'S8'"> {{ product.prodName }} - Version S8</div>
                        <div *ngSwitchCase="'S9'"> {{ product.prodName }} - Version S9</div>
                        <div *ngSwitchDefault > {{ product.prodName }} - Default version</div>
                    </div>
                </div>
                
                `
})

export class StructuralDirectivesComponent {
    oneProduct:any = {
        prodName: 'iPhone',
        prodVersion: '7',
        mfgDate: '16-09-2016'
    };

    products:any[] = [
        {
            prodName: 'Samsung Galaxy',
            prodVersion: 'S8',
            mfgDate: '30-10-2017'
        },
        {
            prodName: 'Samsung Galaxy',
            prodVersion: 'S9',
            mfgDate: '15-05-2018'
        },
        {
            prodName: 'Samsung Note',
            prodVersion: '',
            mfgDate: '20-02-2018'
        }
    ];
}