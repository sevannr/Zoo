import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from './../../../../services/global';

import { AnimalsService } from './../../../../services/animals.service';
import { UserService } from './../../../../services/user.service';
import { UploadService } from './../../../../services/upload.service';

import { Animal } from './../../../../models/animal';

import { fadeIn } from './../../../../components/animation';

declare var $: any;

@Component({
  selector: 'admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css'],
  animations: [ fadeIn ]
})
export class AdminAddComponent implements OnInit {

  animal: Animal;
  filesToUpload: Array<File>;
  identity: any;
  maxYear: number;
  message: string;
  status: boolean;
  token: string;
  title: string;
  url: string;

  constructor(
    private rctivatedRoute: ActivatedRoute,
    private animalsService: AnimalsService,
    private router: Router,
    private userService: UserService,
    private uploadService: UploadService
  ) {
    this.maxYear = new Date().getFullYear();
    this.identity = this.userService.getIdentity();
    this.clearAnimal();
    this.title = `Add`;
    this.token = this.userService.getToken();
    this.url = GLOBAL.url;
   }

  ngOnInit(): void {
  }

  clearAnimal() {
    this.animal = new Animal('', '', '', this.maxYear, '', '');
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  onSubmit(formAdd) {
    this.animalsService.addAnimal(this.token, this.animal).subscribe(
      response => {
        this.status = response.isSuccess;
        if (response.result._id) {
          this.showAlertMessage(`Animal ${response.result.name} registered successfully`);

          if (this.filesToUpload) {
            this.uploadService.makeFileRequest(
              `${this.url}animals/uploadImage/${response.result._id}`,
              [],
              this.filesToUpload,
              this.token,
              'image'
            )
            .then((result: any) => {
              this.animal.image = result.result.image;
              });
          }

          this.clearAnimal();
          formAdd.reset();
          // this.router.navigate(['/admin-panel/list']);
        } else {
          this.showAlertMessage(`An error has occurred while registration: ${response.message}`);
        }
      },
      error => {
        const errorMessage = error.json();

        this.status = errorMessage.isSuccess;
        this.showAlertMessage(errorMessage.message);
      }
    );
  }

  showAlertMessage(message) {
    this.message = message;

    $('#alertMessage').show();
    setTimeout(() => {
      $('#alertMessage').slideToggle();
    },
    3000);
  }

}
