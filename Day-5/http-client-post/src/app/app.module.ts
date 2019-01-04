import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article.component';
import { ArticleService } from './article.service';

//For InMemory testing 
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './test-data';

@NgModule({
  imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      InMemoryWebApiModule.forRoot(TestData)
  ],
  declarations: [
      AppComponent,
      ArticleComponent
  ],
  providers: [
      ArticleService
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { } 
