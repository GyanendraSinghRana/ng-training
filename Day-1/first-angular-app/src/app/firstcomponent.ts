import { Component } from "@angular/core";

@Component({
    selector: 'first-component',
    template: `
                <div>
                    <h2>First Component</h2>
                    <h3>{{ xyz }}</h3>
                </div>
    `
})

export class FirstComponent{
    xyz = "some data";
}