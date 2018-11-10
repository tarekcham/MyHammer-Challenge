import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.css"]
})
export class PanelComponent implements OnInit {
  activeJobs: object[];
  selectedJob: object;
  showDetails: boolean;

  constructor(private dataService: DataService) {
    this.dataService.getJobs().subscribe(jobs => {
      jobs.body.map(job => {
        if (job.state === "active") {
          this.activeJobs.push(job);
        }
      });
    });
  }

  ngOnInit() {
    this.activeJobs = [];
    this.showDetails = false;
  }

  jobSelected (job)  {
    this.showDetails = true;
    this.selectedJob = job;
  }
}
