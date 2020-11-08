import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-simple-test",
  templateUrl: "./simple-test.component.html",
  styleUrls: ["./simple-test.component.scss"]
})
export class SimpleTestComponent implements OnInit {
  title = "AngularWeatherApp";

  constructor() {
  }

  ngOnInit(): void {
  }

}
