import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-comptencies-card",
  templateUrl: "./comptencies-card.component.html",
  styleUrls: ["./comptencies-card.component.css"],
})
export class ComptenciesCardComponent implements OnInit {
  @Input() competencies: any;
  
  constructor() {}

  ngOnInit(): void {}
}
