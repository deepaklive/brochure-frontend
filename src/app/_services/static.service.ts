import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StaticDataService {
  user: any;
  constructor(http: HttpClient) {}
}
