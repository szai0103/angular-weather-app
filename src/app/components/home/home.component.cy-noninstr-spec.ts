/* tslint:disable */
/// <reference types="cypress" />
import {mount, initEnv, getCypressTestBed, setConfig} from 'cypress-angular-unit-test';
import {HomeComponent} from './home.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterLink} from '@angular/router';
import {AuthService} from "../../auth.service";

describe('Home Unit Tests', () => {

  beforeEach(() => {
    // setConfig({ cssFile: 'node_modules/@scu/core-ui/dist/schwarz-core-ui/schwarz-core-ui.css' });
    // setConfig({
    //   cssFiles: [
    //     'node_modules/@scu/core-ui/dist/schwarz-core-ui/schwarz-core-ui.css',
    //     'node_modules/primeng/resources/primeng.min.css'
    //   ]
    // });
    initEnv(HomeComponent, {
      providers: [AuthService, RouterLink],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule]
    });
  });

  it('should create', () => {
    const fixture = mount(HomeComponent, {title: 'Angular Weather App'});
    fixture.detectChanges();
  });

  it('shows message to guide to login', () => {
    mount(HomeComponent, {title: 'Angular Weather App'});

    cy.contains('Please, Log in by clicking on the button above to proceed!');
  });

  // it('if is logged in shows the welcoming message with title', () => {
  //   const auth = getCypressTestBed().inject(AuthService);
  //   cy.stub(auth, "isLoggedIn").returns(true);
  //
  //   mount(HomeComponent, {title: 'Angular Weather App'});
  //
  //   cy.contains('Welcome to Angular Weather App!');
  // });
})
;
