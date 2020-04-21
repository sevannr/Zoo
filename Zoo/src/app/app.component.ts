import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  emailContact: string;
  emailContactString = 'emailContact';
  title = `Sevann's Zoo`;
  
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
}
