import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jd-card',
  templateUrl: './jd-card.component.html',
  styleUrls: ['./jd-card.component.css']
})
export class JdCardComponent implements OnInit {

  @Input() jd: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
