import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { DataService } from "./data.service";

export class ExperienceService extends DataService {
    constructor(http: HttpClient) {
      super(environment.brochure_api + "/experience", http);
    }
}

