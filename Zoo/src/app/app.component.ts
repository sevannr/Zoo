import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {

  emailContact: string;
  emailContactString = 'emailContact';
  title = `Sevann's Zoo`;
  
  // missing to fix the icon property
  routes = [
    {
      icon: 'fas fa-house-user',
      name: 'Home',
      path: '/home'
    },
    {
      icon: 'fas fa-hippo',
      name: 'Aminals',
      path: '/animals'
    },
    {
      icon: 'fas fa-gift',
      name: 'Store',
      path: '/store'
    },
    {
      icon: 'fas fa-user-tie',
      name: 'Keepers',
      path: '/keepers'
    },
    {
      icon: 'fas fa-map-marker-alt',
      name: 'Contact',
      path: '/contact'
    }
  ];

  ngOnInit() {
    this.emailContact = localStorage.getItem(this.emailContactString);
  }

  ngDoCheck() {
    this.emailContact = localStorage.getItem(this.emailContactString);
  }

  localStorageClear() {
    localStorage.clear();
  }

  deleteEmailcontact() {
    localStorage.removeItem(this.emailContactString);
    this.localStorageClear();

    this.emailContact = null;
  }
}
