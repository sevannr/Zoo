import { Component, OnInit } from '@angular/core';
import { fadeIn } from './../animation';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from './../../models/user';
import { Constants } from './../../constants/constants';
import { GLOBAL } from './../../services/global';
import { UserService } from './../../services/user.service';
import { log } from 'util';
import { timeout } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [ fadeIn ]
})
export class RegisterComponent implements OnInit {

  message: string;
  status: boolean;
  title = 'Register';
  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router) {
      this.clearUser();
     }

  ngOnInit(): void {
  }

  clearUser() {
    this.user = new User('', '', '', '', '', '', Constants.ROLE_USER);
  }

  onSubmit(registerForm) {
    this.userService.register(this.user).subscribe(
      response => {
        this.status = response.isSuccess;
        if(response.result._id) {
          this.showAlertMessage(`User ${response.result.email} registered successfully`);
          this.clearUser();
          registerForm.reset();
        } else {
          this.showAlertMessage(`An error has occurred while registration: ${this.message}`);
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
