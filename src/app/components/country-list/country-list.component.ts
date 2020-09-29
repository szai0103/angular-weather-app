import {Component, OnInit} from "@angular/core";
import {CountryService} from "../../country.service";
import {Router} from "@angular/router";
import {Country} from "../../models/country.model";
import {Observable} from "rxjs";

@Component({
  selector: "app-country-list",
  templateUrl: "./country-list.component.html",
  styleUrls: ["./country-list.component.scss"]
})
export class CountryListComponent implements OnInit {
  public currentCountries$: Observable<Country[]>;

  constructor(public countryService: CountryService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries() {
    this.currentCountries$ = this.countryService.getAllCountries();
  }

  goToCityList(iso: string) {
    return this.router.navigate(["/city-list/", iso]);
  }
}
