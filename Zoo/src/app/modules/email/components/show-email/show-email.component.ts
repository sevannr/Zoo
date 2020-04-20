import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'show-email',
  templateUrl: './show-email.component.html',
  styleUrls: ['./show-email.component.css']
})
export class ShowEmailComponent implements DoCheck, OnInit {

  emailContact: string;
  emailContactString = 'emailContact';
  title = `Show Email`;

  constructor() { }

  ngOnInit() {
    this.emailContact = localStorage.getItem(this.emailContactString);
  }

  ngDoCheck() {
    this.emailContact = localStorage.getItem(this.emailContactString);
  }

  localStorageClear() {
    localStorage.clear();
  }

  deleteEmailcontact() {
    localStorage.removeItem(this.emailContactString);
    this.localStorageClear();

    this.emailContact = null;
  }


}
