import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Country} from "./models/country.model";

@Injectable({
  providedIn: "root"
})
export class CountryService {
  headers: HttpHeaders;
  BASE_URL = `http://localhost:8082/api/`;

  constructor(private apiService: HttpClient) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
  }

  public getAllCountries(): Observable<Country[]> {
    // ex.: http://localhost:8082/api/countries
    return this.apiService.get<Country[]>(`${this.BASE_URL}countries`);
  }
}
