import { Component, OnInit } from '@angular/core';
import { fadeIn } from './../animation';

@Component({
  selector: 'keepers',
  templateUrl: './keepers.component.html',
  styleUrls: ['./keepers.component.css'],
  animations: [ fadeIn ]
})
export class KeepersComponent implements OnInit {

  title = 'Keepers';
  
  constructor() { }

  ngOnInit(): void {
  }

}
