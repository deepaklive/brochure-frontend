import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { DataService } from "./data.service";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})


export class EducationService extends DataService {
    constructor(http: HttpClient) {
      super(environment.brochure_api + "/education", http);
    }
}
