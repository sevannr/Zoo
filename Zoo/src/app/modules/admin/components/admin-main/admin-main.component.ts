import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  title = `Administration panel`;

  routes = [
    { path: 'list', message: 'Listado'},
    { path: 'add', message: 'Add'},
    { path: 'edit', message: 'Edit'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
