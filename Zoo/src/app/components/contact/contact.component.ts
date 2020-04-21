import { Component, OnInit } from '@angular/core';
import { fadeIn } from './../animation';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [ fadeIn ]
})
export class ContactComponent implements OnInit {

  emailContact: string;
  title = 'Contact';

  constructor() { }

  ngOnInit(): void {
  }

  saveEmail() {
    localStorage.setItem('emailContact', this.emailContact);
  }

}
