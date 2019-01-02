import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ButtonOverviewComponent } from './ButtonOverviewComponent';
import { CheckboxOverviewComponent } from './CheckboxOverviewComponent';
import { GridListComponent } from './GridListComponent';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ButtonOverviewComponent,
    CheckboxOverviewComponent,
    GridListComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
