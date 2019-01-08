import { Injectable } from '@angular/core';
import { Registration } from '../entity/Registration';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  registeredUsers:Registration[] = [
    {
      firstName: 'Amey',
      lastName: 'Patil',
      dob: '03/13/1985',
      email: 'amey.patil@gmail.com'
    },
    {
      firstName: 'Sumit',
      lastName: 'Sharma',
      dob: '05/11/1990',
      email: 'sumit.sharma@gmail.com'
    },
    {
      firstName: 'Piyush',
      lastName: 'Shah',
      dob: '13/05/1995',
      email: 'piyush.shah@gmail.com'
    }
  ];
  
  constructor() { }

  getRegisteredUsers() : Registration[]{
    return this.registeredUsers;
  }
}
