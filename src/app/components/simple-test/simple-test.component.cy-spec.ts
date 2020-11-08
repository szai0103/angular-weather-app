/// <reference types="cypress" />
import { initEnv, mount } from "cypress-angular-unit-test";
import {SimpleTestComponent} from "./simple-test.component";

describe("Simple Unit Test", () => {

  beforeEach(() => {
    initEnv(SimpleTestComponent);
  });

  it("shows inputs", () => {

    mount(SimpleTestComponent, { title: "AngularWeatherApp" });

    cy.contains("AngularWeatherApp");
  });

  // it("stub service", () => {
  //   const authService = getCypressTestBed().inject(AuthService);
  //   cy.stub(authService, "isLoggedIn").returns(true);
  //
  //   mount(HomeComponent, { title: "Angular Weather App" });
  //
  //   cy.contains("Welcome to Angular Weather App!");
  // });
});
