/* tslint:disable */
/// <reference types="cypress" />
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {getTestBed} from '@angular/core/testing';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';

describe('AuthService', () => {
  let auth: AuthService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  before(() => {
    getTestBed().resetTestEnvironment();
    getTestBed().initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );

    getTestBed().configureTestingModule({
      providers: [{provide: AuthService, useClass: AuthService}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule, RouterTestingModule],
    });

    auth = getTestBed().inject(AuthService);
    httpMock = getTestBed().inject(HttpTestingController);
    httpClient = getTestBed().inject(HttpClient);
  });

  describe("login", () => {
    beforeEach(() => {
      cy.spy(auth.auth0, "authorize");
      auth.login();
    });

    it("should call authorize from auth0 ", () => {
      try {
        expect(auth.auth0.authorize).to.have.been.called;
      } catch (e) {
        expect(e).to.match("Not authorized!")
      }
    });
  });

  describe("handleLoginCallback", () => {
    beforeEach(() => {
      cy.spy(auth.auth0, "parseHash");
      auth.handleLoginCallback();
    });

    it("should call parseHash from auth0", () => {

      it("should call parseHash from auth0 and return result", () => {
        const authResult = {
          accessToken: "TOKEN"
        }
        expect(auth.auth0.parseHash).to.have.been.called.and.returned(authResult);

        if (authResult && authResult.accessToken) {
          let spyGetUserInfo = cy.spy(auth, "getUserInfo");
          expect(spyGetUserInfo).to.have.been.called
        }
      });

      it("should call parseHash from auth0 and throw an error", () => {
        const err = {
          error: "error"
        }
        expect(auth.auth0.parseHash).to.have.been.called.and.returned(err);
        expect(window.alert).to.have.been.called.with(`Error: ${err.error}. Check the console for further details.`);
      });
    });
  });

  describe("scheduleRenewal", () => {
    beforeEach(() => {
      auth.scheduleRenewal();
      cy.setLocalStorage("expires_at", (Date.now() * 1000).toString());
    });

    afterEach(() => {
      cy.removeLocalStorage("expires_at");
    })

    // it("should call getAccessToken", () => {
    //
    //   const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    //   const delay = expiresAt - Date.now();
    //   // @ts-ignore
    //   let spy = cy.spy(auth, ["getAccessToken"]);
    //   let stub = cy.stub(auth.tokenRenewalTimeout);
    //
    //   if (delay > 0) {
    //     setTimeout(function () {
    //       expect(stub).change(setTimeout(() => {
    //         expect(spy).to.have.been.called;
    //       }, delay));
    //     });
    //   }
    // })
  });
});
