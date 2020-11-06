import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../auth.service";
import {User} from "../../models/user.model";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit {
  user: User;

  constructor(public auth: AuthService) {
    this.user = this.auth.userProfile;
  }

  ngOnInit() {
  }
}
