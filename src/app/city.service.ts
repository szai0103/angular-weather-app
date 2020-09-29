import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {City} from "./models/city.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CityService {
  headers: HttpHeaders;
  BASE_URL = `http://localhost:8081/api/`;

  constructor(private apiService: HttpClient) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
  }

  public getAllCitiesByCountry(iso: string): Observable<City[]> {
    // ex.: http://localhost:8081/api/cities?country=BG

    return this.apiService.get<City[]>(`${this.BASE_URL}cities?country=${iso}`);
  }

  public addNewCityToCountry(iso: string, newCity: string): Observable<City> {
    // ex.: http://localhost:8081/api/cities?country=BG&city={city}&temp={}

    newCity = newCity.replace(/  +/g, " ");
    const cityName = newCity.split(" ")[0];
    const cityTemp = newCity.split(" ")[1];

    return this.apiService.post<City>(`${this.BASE_URL}cities?country=${iso}&city=${cityName}&temp=${cityTemp}`, "");
  }
}
