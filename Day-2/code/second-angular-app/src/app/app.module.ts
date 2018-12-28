import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './propertyBinding.component';
import { EventBindingComponent } from './eventBinding.component';
import { TwoWayBindingComponent } from './twoWayBinding.component';
import { StructuralDirectivesComponent } from './structuralDirectives.component';
import { PipesExampleComponent } from './pipesExample.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    StructuralDirectivesComponent,
    PipesExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
