import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-compeducation-card',
  templateUrl: './compeducation-card.component.html',
  styleUrls: ['./compeducation-card.component.css']
})
export class CompeducationCardComponent implements OnInit {
@Input() education: any;

  constructor() { }

  ngOnInit(): void {
  }

}
