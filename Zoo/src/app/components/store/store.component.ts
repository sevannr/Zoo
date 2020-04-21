import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { fadeIn } from './../animation';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  animations: [ fadeIn,
  [
    trigger('mark', [
      state('false', style({
        border: '5px solid #ccc',
        color: 'white'
      })),
      state('true', style({
        border: '5px solid yellow',
        background: 'red',
        borderRadius: '50px',
        color: 'white'
      })),
      transition('false => true', animate('3s linear')),
      transition('true => false', animate('3s linear'))
    ])
  ]
]
})

export class StoreComponent implements OnInit {

  public status;

  constructor() { 
    this.status = false;
  }

  ngOnInit() {
    $('#textjq').hide();
    $('#buttonjq').click(() => $('#textjq').slideToggle());

    $('#box').dotdotdot({});
  }

  changeState() {
    return this.status = !this.status;
  }

}
