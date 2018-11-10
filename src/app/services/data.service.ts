import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataService {

  private path = "./assets/jobs.json";
  
  constructor(public http: Http) {
    console.log("Data service is connected..");
  }

  getJobs = () =>
    this.http.get(this.path).pipe(map(res => res.json()));
}
