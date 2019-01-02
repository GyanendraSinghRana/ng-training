import { Component } from '@angular/core';

@Component({
    selector: 'grid-list-component',
    template: `
                <mat-grid-list cols="2" rowHeight="100px">
                    <mat-grid-tile>1</mat-grid-tile>
                    <mat-grid-tile>2</mat-grid-tile>
                    <mat-grid-tile>3</mat-grid-tile>
                    <mat-grid-tile>4</mat-grid-tile>
                </mat-grid-list>
                `,
    styles: [ 'mat-grid-tile { background: lightblue }']
})

export class GridListComponent {}