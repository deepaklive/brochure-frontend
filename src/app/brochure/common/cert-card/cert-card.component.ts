import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cert-card',
  templateUrl: './cert-card.component.html',
  styleUrls: ['./cert-card.component.css']
})
export class CertCardComponent implements OnInit {
@Input() certifications:any;

  constructor() { }

  ngOnInit(): void {
  }

}
