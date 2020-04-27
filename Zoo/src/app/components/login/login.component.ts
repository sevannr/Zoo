import { Component, OnInit } from '@angular/core';
import { fadeIn } from './../animation';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';

declare var $: any;

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [ fadeIn ]
})
export class LoginComponent implements OnInit {

  identity: any;
  message: string;
  status: boolean;
  title = 'Login';
  token: string;
  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router) {
      this.user = new User('', '', '', '', '', '', '');
  }

  ngOnInit(): void {
  }

  onSubmit(loginForm) {
    this.userService.login(this.user).subscribe(
      response => {
        this.status = response.isSuccess;
        this.identity = response.result;
        localStorage.setItem('identity', JSON.stringify(this.identity));

        if (response.result._id) {
          this.userService.login(this.user, true).subscribe(
            response => {
              this.token = response.result;
              if(this.token.length > 0) {
                localStorage.setItem('token', this.token);
                this.router.navigate(['/']);
              }
            },
            error => {
              const errorMessage = error.json();
              this.status = errorMessage.isSuccess;
              this.showAlertMessage(errorMessage.message);
            }
          );
          
          loginForm.reset();
        } else {
          this.showAlertMessage(response.message);
        }
      },
      error => {
        this.user.password = '';
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
