import { Component, OnInit } from '@angular/core';
import { fadeIn } from './../animation';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { GLOBAL } from './../../services/global';

@Component({
  selector: 'keepers',
  templateUrl: './keepers.component.html',
  styleUrls: ['./keepers.component.css'],
  animations: [ fadeIn ]
})
export class KeepersComponent implements OnInit {

  keepers: User[];
  title = 'Keepers';
  url: string;
  
  constructor(private userService: UserService) {
    this.url = GLOBAL.url;
  }

  ngOnInit(): void {
    this.userService.getKeeperes().subscribe(
      response => {
        this.keepers = response.result;
      },
      error => {
        console.log(error.json().message);
      }
    );
  }

}
