/* tslint:disable */
/// <reference types="cypress" />
import {mount, initEnv, getCypressTestBed, setConfig} from "cypress-angular-unit-test";
import {AuthService} from "../../auth.service";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {RouterLink} from "@angular/router";
import {HeaderComponent} from "./header.component";

describe("HeaderComponent Unit Tests", () => {
  beforeEach(() => {
    // setConfig({ style: "../../../styles.scss" });
    initEnv(HeaderComponent, {
      providers: [AuthService, RouterLink],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule]
    });
  });

  it('should create', () => {
    const fixture = mount(HeaderComponent);
    fixture.detectChanges();
  });


  it("shows the title on the left corner on the top", () => {
    mount(HeaderComponent, {title: "Angular Weather App"});

    cy.contains("Angular Weather App");
  });

  it("shows LOG IN button on the right corner on the top", () => {
    mount(HeaderComponent, {title: "Angular Weather App"});

    cy.contains("LOG IN");
  });

  it("shows LOG IN button on the right corner on the top", () => {
    const auth = getCypressTestBed().inject(AuthService);
    cy.stub(auth["isLoggedIn"]).returned(true);

    mount(HeaderComponent, {title: "Angular Weather App"});

    cy.contains("Hi, ");
  });

});

