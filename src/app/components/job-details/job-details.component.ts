import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-job-details",
  templateUrl: "./job-details.component.html",
  styleUrls: ["./job-details.component.css"]
})
export class JobDetailsComponent implements OnInit {
  @Input() selectedJob: object;
  @Input() showDetails: boolean;

  constructor() {}

  ngOnInit() {
  }
}
