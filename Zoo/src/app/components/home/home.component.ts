import { Component, OnInit } from '@angular/core';
import { fadeIn } from './../animation';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ fadeIn ]
})
export class HomeComponent implements OnInit {

  title = `Werlcome to Sevann's Zoo`;
  constructor() { }

  ngOnInit(): void {
  }

}
