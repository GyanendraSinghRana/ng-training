import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  model: any = {};
  isSubmitted:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f:NgForm){
    this.isSubmitted = true;
    console.log("Form valid: ",f);
    console.log("Form valid: ",f.valid);
    console.log("User Submitted data: ",this.model);
  }

}
