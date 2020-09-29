/* tslint:disable */
/// <reference types="cypress" />
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {getCypressTestBed} from "cypress-angular-unit-test";
import {AuthService} from "./auth.service";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";

describe("AuthService", () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    getCypressTestBed().configureTestingModule({
      providers: [AuthService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule, RouterTestingModule],
    });

    service = getCypressTestBed().inject(AuthService);
    httpMock = getCypressTestBed().inject(HttpTestingController);
    httpClient = getCypressTestBed().inject(HttpClient);
  });

  describe("Login", () => {
    beforeEach(() => {
      cy.spy(service.auth0, "authorize");
      service.login();
    });

    it("should call authorize from auth0 ", () => {
      expect(service.auth0.authorize).to.have.been.called;
    });

  });

  describe("handleLoginCallback", () => {
    beforeEach(() => {
      cy.spy(service.auth0, "parseHash");
      service.handleLoginCallback();
    });

    it("should call parseHash from auth0 ", () => {
      expect(service.auth0.parseHash).to.have.been.called;
    });
  });

  describe("scheduleRenewal", () => {
    beforeEach(() => {
      cy.spy(service.auth0, "getAccessToken");
      service.scheduleRenewal();
    });

    it("should call getAccessToken", () => {
      let spy = cy.spy(service.auth0, "getAccessToken");
      cy.spy(service.auth0, "checkSession");
      cy.spy(service, "getUserInfo");

      expect(spy).to.have.been.called;
      expect(service.auth0.checkSession).to.have.been.called;
      expect(service.getUserInfo).to.have.been.called;
    });
  });
});
