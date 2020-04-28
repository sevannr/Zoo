import { Component, OnInit } from '@angular/core';
import { AnimalsService } from './../../../../services/animals.service';
import { UserService } from './../../../../services/user.service';
import { Constants } from './../../../../constants/constants' ;

import { fadeIn } from './../../../../components/animation';
import { Observable } from 'rxjs';
import { constants } from 'buffer';

@Component({
  selector: 'admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css'],
  animations: [ fadeIn ]
})
export class AdminListComponent implements OnInit {

  animals: any;
  title = `List`;
  token: string;

  constructor(private animalsService: AnimalsService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem(Constants.TOKEN);
    this.getAnimals();
  }

  getAnimals() {
    this.animalsService.getAnimals().subscribe(
      response => {
        this.animals = response.result;
      },
      error => {
        console.log(error.json());
      }
    );
  }

  deleteAnimal(animalId) {
    this.animalsService.deleteAnimal(this.token, animalId).subscribe(
      response => {
        if (!response.result) {
          alert('Error in server');
        } else {
          this.getAnimals();
        }

      },
      error => {
        console.log(error.json());
      }
    );
  }
}
