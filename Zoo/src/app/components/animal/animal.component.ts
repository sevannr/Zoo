import { Component, Input, OnInit } from '@angular/core';
import { fadeIn } from './../animation';
import { AnimalsService } from './../../services/animals.service';
import { GLOBAL } from './../../services/global';
import { Animal } from './../../models/animal';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
  animations: [ fadeIn ]
})
export class AnimalComponent implements OnInit {

  animal: Animal;
  message: string;
  status: boolean;
  title: string;
  url: string;
  
  constructor(
    private animalsService: AnimalsService,
    private route: ActivatedRoute,
    private router: Router) {
    this.title = 'Animal';
    this.url = GLOBAL.url;
  }

  ngOnInit(): void {
    const animalId = this.route.snapshot.paramMap.get('animalId');
    this.animalsService.getAnimal(animalId).subscribe(
      response => {
        this.status = response.isSuccess;
        this.animal = response.result;
      },
      error => {
        this.status = error.json().isSuccess;
        this.message = error.json().message;
      }
    );
  }

}
