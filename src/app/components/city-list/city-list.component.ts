import {Component, OnInit, ViewChild} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CityService} from "../../city.service";
import {City} from "../../models/city.model";

@Component({
  selector: "app-city-list",
  templateUrl: "./city-list.component.html",
  styleUrls: ["./city-list.component.scss"]
})
export class CityListComponent implements OnInit {
  @ViewChild("input") input;
  currentCountry;
  currentCities: City[];
  form: FormGroup;

  constructor(private cityService: CityService, private  route: ActivatedRoute, private fb: FormBuilder) {
    this.currentCountry = this.route.snapshot.paramMap.get("iso");
    this.form = this.fb.group({
      city: [""],
    });
  }

  ngOnInit(): void {
    this.loadCities();
  }

  addCity() {
    this.cityService.addNewCityToCountry(this.currentCountry, this.input.nativeElement.value)
      .subscribe();

    this.loadCities();
  }

  loadCities() {
    this.cityService.getAllCitiesByCountry(this.currentCountry)
      .subscribe((cities: City[]) => this.currentCities = cities);
  }
}
