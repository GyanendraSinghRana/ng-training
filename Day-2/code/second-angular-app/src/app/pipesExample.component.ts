import { Component } from "@angular/core";

@Component({
    selector: 'pipes-example',
    template: `
                <h2>Pipes</h2>
                <h4>uppercase, lowercase, date pipes</h4>
                <ul>
                    <li *ngFor="let product of products">
                        {{ product.prodName | uppercase }} - {{ product.prodVersion | lowercase}} 
                        <br>Manufacturing date is {{ product.mfgDate | date:'mediumDate' }}
                    </li>
                </ul>
                
                <h4>json pipe</h4>
                <div> {{ oneProduct | json }} </div>

                <h4>Slice pipe</h4>
                <div>
                    {{ months | slice:2:6 }}
                    <br><span>- here 2 and 6 refers to the start and the end index</span>
                </div>
                

                <h4>Decimal Pipe</h4>
                <div>
                    {{ mynumber | number:'2.4-4' }}
                    <br><span>2 is for main integer, 4-4 are for integers to be displayed.</span>
                </div>

                <h4>Percent Pipe</h4>
                <b> {{ mypercent | percent }} </b>
                `
})

export class PipesExampleComponent {

    mynumber:number = 5.755658;
    mypercent:any = 0.5765;

    oneProduct:any = {
        prodName: 'iPhone',
        prodVersion: '7',
        mfgDate: new Date(2016,9,16)
    };

    products:any[] = [
        {
            prodName: 'Samsung Galaxy',
            prodVersion: 'S8',
            mfgDate: new Date(2017,1,11)
        },
        {
            prodName: 'Samsung Galaxy',
            prodVersion: 'S9',
            mfgDate: new Date(2017,10,1)
        },
        {
            prodName: 'Samsung Note',
            mfgDate: new Date(2016,11,5)
        }
    ];

    months:any[] = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
}