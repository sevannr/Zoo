import { Component, OnInit } from '@angular/core';
import { fadeIn } from './../animation';
import { AnimalsService } from './../../services/animals.service';
import { GLOBAL } from './../../services/global';

@Component({
  selector: 'animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  animations: [ fadeIn ]
})
export class AnimalsComponent implements OnInit {

  animals: any;
  errorMessage: string;
  title = 'Anilmals';
  url: string;
  
  constructor(private animalsService: AnimalsService) {
    this.url = GLOBAL.url;
   }

  ngOnInit(): void {
    this.animalsService.getAnimals().subscribe(
      response => {
        this.animals = response.result;
        console.log(this.animals);

        // this.animals.map(a => {
        //   // console.log('recorriendo');
        //   // console.log(a);
        //   if (a.image && a.image !== '') {
        //     console.log('este tiene imagen')
        //     this.animalsService.getImageFile(a.image).subscribe(
        //       responseImage => {
        //         console.log(responseImage);
        //         a.image = responseImage.result.image;
        //         console.log(a);
        //       },
        //       error => {
        //         console.log(error);
        //       }
        //     );
        //   }
        // });
      },
      error => {
        this.errorMessage = error.json().message;
      }
    );
  }

}
