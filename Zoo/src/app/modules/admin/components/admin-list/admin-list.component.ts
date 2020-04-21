import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {


  animals = [
    { name: 'Oso Panda', year: 2012 },
    { name: 'Guepardo', year: 2014 },
    { name: 'Tigre', year: 2010 },
    { name: 'Pinwino', year: 2015 },
    { name: 'León', year: 2012 },
    { name: 'Jirafa', year: 2017 },
  ];

  title = `List`;

  constructor() { }

  ngOnInit(): void {
  }

}
