import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isCollapsed:Boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleNavBar() {
    console.log("toggleNavBar");
    this.isCollapsed = !this.isCollapsed;
  }

}
