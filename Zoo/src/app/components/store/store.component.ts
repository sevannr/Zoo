import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#textjq').hide();
    $('#buttonjq').click(() => $('#textjq').slideToggle());

    $('#box').dotdotdot({});
  }

}
