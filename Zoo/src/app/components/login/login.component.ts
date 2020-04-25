import { Component, OnInit } from '@angular/core';
import { fadeIn } from './../animation';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [ fadeIn ]
})
export class LoginComponent implements OnInit {

  title = 'Login';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

}
