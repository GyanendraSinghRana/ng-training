import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { Registration } from '../entity/Registration';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  registeredusers:Registration[];
  registration:Registration;

  constructor(
    private route:ActivatedRoute,
    private userService:UserService,
    private router: Router
    ) { }

  ngOnInit() {
    const index = this.route.snapshot.paramMap.get('index');
    this.registeredusers = this.userService.getRegisteredUsers();
    this.registration = this.registeredusers[index];
  }

  goBack(){
    this.router.navigate(['registration']);
  }
}
