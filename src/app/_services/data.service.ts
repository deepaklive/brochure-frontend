import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export abstract class DataService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      // "Authorization": this.auth.getAccessToken,
    }),
  };

  constructor(
    private url: string,
    private http: HttpClient
  ) // private auth: AuthService
  {}

  getAll() {
    return this.http.get(this.url + "/", this.httpOptions);
  }

  getbyId(id: string) {
    return this.http.get(
      this.url + "/" + id + "/",

      this.httpOptions
    );
  }

  getbySearch(searchParam: string, searchParamValue: string) {
    searchParamValue = encodeURI(searchParamValue);
    searchParamValue = searchParamValue.replace("&", "%26");
    return this.http.get(
      this.url + "/?" + searchParam + +searchParamValue,
      this.httpOptions
    );
  }

  getbySearch2(
    searchParaml: string,
    searchParamValuel: string,
    searchParam2: string,
    searchParamValue2: string
  ) {
    searchParamValuel = encodeURI(searchParamValuel);
    searchParamValuel = searchParamValuel.replace("&", "%26");
    searchParamValue2 = encodeURI(searchParamValue2);
    searchParamValue2 = searchParamValue2.replace("&", "%26");

    return this.http.get(
      this.url +
        "/?" +
        searchParaml +
        "=" +
        searchParamValuel +
        "&" +
        searchParam2 +
        "=" +
        searchParamValue2,
      this.httpOptions
    );
  }

  create(resource: any) {
    return this.http.post(
      this.url + "/",
      resource,

      this.httpOptions
    );
  }

  update(resource: any) {
    return this.http.put(
      this.url + "/" + resource.id + "/",
      resource,
      this.httpOptions
    );
  }

  patch(resource: any) {
    return this.http.patch(
      this.url + " / " + resource.id + "/",

      resource,
      this.httpOptions
    );
  }

  delete(id: any) {
    return this.http.delete(
      this.url + "/" + id,

      this.httpOptions
    );
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      console.log("Error : Bad Input .  Message " + error);
    } else if (error.status === 404) {
      console.log("Error : Not Found .  Message " + error);
    } else {
      console.log("Error : " + error);
      // return ObservableThrowError(errorMsg);
    }
  }
}
