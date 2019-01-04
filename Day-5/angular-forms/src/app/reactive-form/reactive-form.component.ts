import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  signUpForm: FormGroup;
  
  submitted:boolean = false;
  formvalid:boolean = false;
  
  myform:any;
  name:string;
  email:string;
  
  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup(
      {
        username: new FormControl('', Validators.required),
        useremail: new FormControl('', [Validators.required, Validators.email])
    });

    // easy access to form fields
    this.myform = this.signUpForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signUpForm.invalid) {
      return;
    }
    
    this.formvalid = true;
    this.name = this.myform.username.value;
    this.email = this.myform.useremail.value;
  }

}
