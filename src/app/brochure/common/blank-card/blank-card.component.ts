import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-blank-card",
  templateUrl: "./blank-card.component.html",
  styleUrls: ["./blank-card.component.css"],
})
export class BlankCardComponent implements OnInit {
  
  @Input() header: any;
  @Input() item !: any;


  constructor(
   
  ) {}

  ngOnInit(): void {}

 
}
