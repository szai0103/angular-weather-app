import {BrowserModule} from "@angular/platform-browser";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./components/header/header.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {HomeComponent} from "./components/home/home.component";
import {CityListComponent} from "./components/city-list/city-list.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CountryListComponent} from "./components/country-list/country-list.component";
import {HttpClientModule} from "@angular/common/http";
import {CallbackComponent} from "./components/callback/callback.component";
import { SimpleTestComponent } from './components/simple-test/simple-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserProfileComponent,
    HomeComponent,
    CityListComponent,
    CountryListComponent,
    CallbackComponent,
    SimpleTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {
}
