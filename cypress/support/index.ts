// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import "./commands";

// @ts-ignore
require("core-js/es/reflect");
// @ts-ignore
require("core-js/stable/reflect");
// @ts-ignore
require("core-js/features/reflect");
// @ts-ignore
require("cypress-angular-unit-test/support");

import "cypress-istanbul/support";

