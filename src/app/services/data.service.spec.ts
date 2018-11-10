import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { DataService } from "./data.service";

describe("DataService", () => {
  let service: DataService;
  let httpMock: HttpTestingController;
  beforeEach(() =>{ 
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.get(DataService);
    httpMock = TestBed.get(HttpTestingController)
  });

  it("should retrieve jobs list from the API via GET", () =>{
    service.getJobs().subscribe(jobs => {
      expect(jobs.body.length).toBe(4);
    })

    const request = httpMock.expectOne("./assets/jobs.json");

    expect(request.request.method).toBe("Get");
  })
});
