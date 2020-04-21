import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  title = `Edit`;

  constructor() { }

  ngOnInit(): void {
  }

}
