import { Component, OnInit } from '@angular/core';
import { fadeIn } from './../animation';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from './../../models/user';
import { Constants } from './../../constants/constants';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [ fadeIn ]
})
export class RegisterComponent implements OnInit {

  title = 'Register';
  user: User;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

    this.user = new User('', '', '', '', '', '', Constants.ROLE_USER);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('submit');
    console.log(this.user);
    
  }

}
