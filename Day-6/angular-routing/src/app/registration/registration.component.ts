import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Registration } from '../entity/Registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  registrations:Registration[];
  selectedRow:number;
  regModel:Registration;
  showNew:Boolean = false;
  submitType:string = 'Save';

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.registrations = this.userService.getRegisteredUsers();
  }

  onEdit(index:number){
    this.selectedRow = index;
    this.regModel = new Registration();
    this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
    this.showNew = true;
    this.submitType = 'Update';
  }

  onDelete(index:number){
    this.registrations.splice(index, 1);
  }

  onNew(){
    this.regModel = new Registration();
    this.submitType = 'Save';
    this.showNew = true;
  }

  onSave(){
    if(this.submitType === 'Save' ){
      this.registrations.push(this.regModel);
    }else{
      this.registrations[this.selectedRow].firstName = this.regModel.firstName;
      this.registrations[this.selectedRow].lastName = this.regModel.lastName;
      this.registrations[this.selectedRow].dob = this.regModel.dob;
      this.registrations[this.selectedRow].email = this.regModel.email;
    }
    this.showNew = false;
  }

  onCancel(){
    this.showNew = false;
  }
}
