import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./auth.guard";
import {CallbackComponent} from "./components/callback/callback.component";
import {CityListComponent} from "./components/city-list/city-list.component";
import {CountryListComponent} from "./components/country-list/country-list.component";
import {HomeComponent} from "./components/home/home.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", redirectTo: "", pathMatch: "full"},
  {path: "callback", component: CallbackComponent},
  {path: "country-list", canActivate: [AuthGuard], component: CountryListComponent},
  {path: "user-profile", canActivate: [AuthGuard], component: UserProfileComponent},
  {path: "city-list/:iso", canActivate: [AuthGuard], component: CityListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
