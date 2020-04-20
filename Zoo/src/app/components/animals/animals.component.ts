import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  title = 'Anilmals';
  
  constructor() { }

  ngOnInit(): void {
  }

}
