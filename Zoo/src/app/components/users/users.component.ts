import { Component, OnInit } from '@angular/core';
import { fadeIn } from './../animation';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from './../../models/user';
import { Constants } from './../../constants/constants';
import { GLOBAL } from './../../services/global';
import { UserService } from './../../services/user.service';
import { UploadService } from './../../services/upload.service';

declare var $: any;

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [ fadeIn ]
})
export class UsersComponent implements OnInit {

  filesToUpload: Array<File>;
  identity: any;
  message: string;
  status: boolean;
  title: string;
  token: string;
  url: string;
  user: User;

  constructor(
    private router: Router,
    private uploadService: UploadService,
    private userService: UserService) {
      this.url = GLOBAL.url;
      this.title = 'Edit your profile';
   }

  ngOnInit(): void {
    this.identity = this.user = this.userService.getIdentity();
    this.token = this.userService.getToken();

    if (this.identity == null) {
      this.router.navigate(['/login']);
    }
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    
  }

  onSubmit(editForm) {
    this.userService.update(this.user).subscribe(
      response => {
        this.status = response.isSuccess;
        if (!response.result._id) {
          this.showAlertMessage(response.message);
        } else {
          localStorage.setItem(Constants.IDENTITY, JSON.stringify(this.user));
          this.uploadService.makeFileRequest(
            `${this.url}users/uploadImage/${response.result._id}`,
            [],
            this.filesToUpload,
            this.token,
            'image'
          )
          .then((result: any) => {
            this.user.image = result.result.image;
            localStorage.setItem(Constants.IDENTITY, JSON.stringify(this.user));
          });
          this.showAlertMessage('User update successfully!');
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
