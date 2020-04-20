import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emailContact: string;
  title = 'Contact';

  constructor() { }

  ngOnInit(): void {
  }

  saveEmail() {
    console.log(this.emailContact);
    localStorage.setItem('emailContact', this.emailContact);
  }

}
