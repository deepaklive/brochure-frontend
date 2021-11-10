import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { EditCompetenciesComponent } from "../../edit-brochure/edit-competencies/edit-competencies.component";

@Component({
  selector: "app-comptencies-card",
  templateUrl: "./comptencies-card.component.html",
  styleUrls: ["./comptencies-card.component.css"],
})
export class ComptenciesCardComponent implements OnInit {
  @Input() competencies: any;
  
  constructor(
    private dialog : MatDialog,
  ) {}

  ngOnInit(): void {}

  onAddComptency(){
    this.dialog.open(EditCompetenciesComponent, {
      width : '80%',
      height : '80%',
    });
  }
}
