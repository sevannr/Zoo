import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

  title = `Add`;
  maxYear = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
