import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-award-card',
  templateUrl: './award-card.component.html',
  styleUrls: ['./award-card.component.css']
})
export class AwardCardComponent implements OnInit {

  @Input() awards:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
