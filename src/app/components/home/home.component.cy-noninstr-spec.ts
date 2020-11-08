/* tslint:disable */
/// <reference types="cypress" />
import {mount, initEnv} from 'cypress-angular-unit-test';
import {HomeComponent} from './home.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterLink} from '@angular/router';
import {AuthService} from "../../auth.service";

describe('Home Unit Tests', () => {

  beforeEach(() => {
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
})
;
