import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MouseActionsDirective } from './mouseactionsDirective';
import { MydirectiveDirective } from './directive/mydirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    MouseActionsDirective,
    MydirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
