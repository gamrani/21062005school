import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUrl:string;
  p:string;
  constructor(private router : Router) {
   }

  ngOnInit() {
    this.router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
    console.log("currentURl : "+this.currentUrl);
  }
  getColor(){
    return 'primary';
  }
}
