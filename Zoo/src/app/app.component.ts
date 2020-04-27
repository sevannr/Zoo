import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Constants } from './constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {

  // emailContact: string;
  // emailContactString = 'emailContact';
  identity: any;
  ROLE_ADMIN = Constants.ROLE_ADMIN;
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

  constructor(private router: Router, private userService: UserService) {

  }

  ngDoCheck() {
    this.identity = this.userService.getIdentity();
  }

  ngOnInit() {
    this.identity = this.userService.getIdentity();
  }

  logout() {
    localStorage.clear();
    this.identity = null;
    this.router.navigate(['/']);
  }
}
