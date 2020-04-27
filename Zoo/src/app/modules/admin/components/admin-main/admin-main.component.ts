import { Component, OnInit } from '@angular/core';
import { fadeIn } from './../../../../components/animation';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css'],
  animations: [ fadeIn ]
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
