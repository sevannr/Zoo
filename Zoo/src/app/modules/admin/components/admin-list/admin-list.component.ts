import { Component, OnInit } from '@angular/core';
import { AnimalsService } from './../../../../services/animals.service';

import { fadeIn } from './../../../../components/animation';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css'],
  animations: [ fadeIn ]
})
export class AdminListComponent implements OnInit {


  // animals = [
  //   { name: 'Oso Panda', year: 2012 },
  //   { name: 'Guepardo', year: 2014 },
  //   { name: 'Tigre', year: 2010 },
  //   { name: 'Pinwino', year: 2015 },
  //   { name: 'León', year: 2012 },
  //   { name: 'Jirafa', year: 2017 },
  // ];

  animals: any;
  title = `List`;

  constructor(private animalsService: AnimalsService) { }

  ngOnInit(): void {
    this.animalsService.getAnimals().subscribe(
      response => {
        this.animals = response.result;
      },
      error => {

      }
    );
  }

}
