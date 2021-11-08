import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { DataService } from "./data.service";


export class CertificationService extends DataService {
    constructor(http: HttpClient) {
      super(environment.brochure_api + "/certification", http);
    }
}

