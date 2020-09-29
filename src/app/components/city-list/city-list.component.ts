import {Component, OnInit, ViewChild} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {City} from "../../models/city.model";
import {CityService} from "../../services/city.service";

@Component({
  selector: "app-city-list",
  templateUrl: "./city-list.component.html",
  styleUrls: ["./city-list.component.scss"]
})
export class CityListComponent implements OnInit {
  @ViewChild("input") input;
  currentCountry;
  currentCities$: Observable<City[]>;

  constructor(private cityService: CityService, private  route: ActivatedRoute) {
    this.currentCountry = this.route.snapshot.paramMap.get("iso");
  }

  ngOnInit(): void {
    this.loadCities();
  }

  addCity(): void {
    this.cityService.addNewCityToCountry(this.currentCountry, this.input.nativeElement.value)
      .subscribe();

    this.loadCities();
  }

  loadCities(): void {
    this.currentCities$ = this.cityService.getAllCitiesByCountry(this.currentCountry);
  }
}
