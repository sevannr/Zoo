import { Component } from '@angular/core';

@Component({
  selector: 'save-email',
  templateUrl: './save-email.component.html',
  styleUrls: ['./save-email.component.css']
})
export class SaveEmailComponent{

  emailContact: string;
  emailContactString = 'emailContact';
  title = `Save Email`;

  constructor() { }

  saveEmail() {
    localStorage.setItem('emailContact', this.emailContact);
  }

}
