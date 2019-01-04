import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ArticleService } from './article.service';
import { Article } from './article';

@Component({
   selector: 'app-article',
   templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {
  dataSaved = false;
  articleForm: FormGroup; 
  allArticles$: Observable<Article[]>
  constructor(private formBuilder:FormBuilder, private articleService: ArticleService) {
  }
  ngOnInit() {
    this.articleForm = this.formBuilder.group({
      title: ['', [ Validators.required ] ],
      category: ['', [ Validators.required ] ],
      writer: ['', [ Validators.required ] ]
    });
    //this.loadAllArticles();
    this.saveArticle();
  }
  onFormSubmit() {
    this.dataSaved = false;
    let article = this.articleForm.value;
    this.articleService.getAllArticles().subscribe(articles => {
      let maxIndex = articles.length - 1;
      let maxIndexItem = articles[maxIndex];
      article.id = parseInt(maxIndexItem.id) + 1;
      this.createArticle(article);
    });
    this.articleForm.reset();
  }
  createArticle(article: Article) {
    this.articleService.createArticle(article).subscribe(
      article => {
        console.log(article);
        this.dataSaved = true;
        this.loadAllArticles();
      },
      err => {
        console.log(err);
      }
    );
  }
  loadAllArticles() {
     this.allArticles$ = this.articleService.getAllArticles();
  }  
  get title() {
     return this.articleForm.get('title');
  }
  get category() {
     return this.articleForm.get('category');
  }  
  get writer() {
     return this.articleForm.get('writer');
  }    
  saveArticle() {
     let article = {id: '4', title: 'Julius Caeser',
          category: 'Literature', writer: 'William Shakespeare'};
     this.articleService.postArticle(article).subscribe(res => { 
          let artcl: Article = res.body;
          console.log(artcl.title);
          console.log(res.headers.get('Content-Type'));		
          this.loadAllArticles();	  
        },
	(err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            //A client-side or network error occurred.				 
            console.log('An error occurred:', err.error.message);
          } else {
            //Backend returns unsuccessful response codes such as 404, 500 etc.				 
            console.log('Backend returned status code: ', err.status);
            console.log('Response body:', err.error);
          }
        }
     );
  }
} 