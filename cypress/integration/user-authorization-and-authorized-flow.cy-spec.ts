/* tslint:disable */
/// <reference path="../support/index.d.ts" />

describe("Login and state after that", () => {
  it("should successfully log into our app and then access all restricted resources", () => {
    cy.visit("/");
    // get the element and verify that the Log in button is in it
    cy.get("#login-button").should("contain", "LOG IN");

    const user = {
      name: Cypress.env("auth_username"),
      email: Cypress.env("auth_username"),
    };

    cy.login()
      .then((resp) => {
        return resp.body;
      })
      .then((body) => {
        const {access_token, expires_in, id_token} = body;
        const auth0State = {
          nonce: "",
          state: "some-random-state",
        };
        // tslint:disable-next-line:max-line-length
        const callbackUrl = `/callback#access_token=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer&state=${auth0State.state}`;
        cy.visit(callbackUrl,
          {
            onBeforeLoad(win) {
              win.document.cookie = "com.auth0.auth.some-random-state=" + JSON.stringify(auth0State);
            },
          });
      });

    cy.wait(500);

    cy.window().then(
      (win) => {
        expect(win.localStorage.getItem("access_token")).to.be.not.null;
        expect(win.localStorage.getItem("expires_at")).to.be.not.null;
      },
    );

    // Home page after successful login

    cy.get(".home-link")
      .should("have.attr", "href", "/")
      .should("have.attr", "label", "HOME");

    cy.get(".countries-link")
      .should("have.attr", "href", "country-list")
      .should("have.attr", "label", "COUNTRIES");

    cy.get("#greeting-name-dropdown")
      .shadow()
      .find("a > span").should("contain", `Hi, ${user.name}`);

    cy.get("#profile-link")
      .should("have.attr", "href", "user-profile")
      .and("contain", "My Profile");

    cy.get("#log-out-button").should("contain", "LOG OUT");

    const title = "Angular Weather App";

    // get the element and verify that the app name is in it
    cy.get("#top-bar-title")
      .should("contain", title);

    // get the element and verify that the help message is in it
    cy.get(".home-message").should(($h3) => {
      expect($h3).to.have.text(`Welcome to ${title}!`);
    });

    cy.get("#router-button").should("have.attr", "routerLink", "country-list")
      .and("have.attr", "text", "Country List");

    // should access country-list and city-list

    let firstCountry;
    let lastCountry;
    cy.request({
      method: "GET",
      url: `http://localhost:8082/api/countries`,
    }).then((response) => {
      firstCountry = response.body[0];
      lastCountry = response.body[response.body.length - 1];
      return [response.body, firstCountry, lastCountry];
    }).as("getAllCountries");

    cy.get("@getAllCountries").then(() => {

      cy.get("#router-button").click();


      cy.get(".country-entity").first()
        .should("have.prop", "text", firstCountry.name.toUpperCase());

      cy.get(".country-entity").last()
        .should("have.prop", "text", lastCountry.name.toUpperCase());

      let firstCity;
      let nextCity;
      cy.request({
        method: "GET",
        url: `http://localhost:8081/api/cities?country=${firstCountry.iso}`,
      }).then((responseCity) => {
        firstCity = responseCity.body[0];
        nextCity = responseCity.body[1];
        return [firstCity, nextCity];
      }).as("getAllCitiesByCountry");

      cy.get("@getAllCitiesByCountry").then(() => {

        cy.get(".country-entity").first().click();

        cy.url().should("eq", `http://localhost:4200/city-list/${firstCountry.iso}`);

        cy.get(":nth-child(1) > .city-entry").should("have.prop", "text", `${firstCity.name.toUpperCase()} ${firstCity.temperature}`);

        cy.get(":nth-child(2) > .city-entry")
          .should(($h1) => {
            expect($h1).to.have.prop("text", `${nextCity.name.toUpperCase()} ${nextCity.temperature}`);
          });
      });
    });

    cy.get("#city > div > scu-advanced-tooltip > div.input__input-area > input")
      .type("Dusseldorf 11").should("have.value", "Dusseldorf 11")
      .then(() => {
        debugger
        cy.get("#add-button").click()
        cy.wait(1000);
        cy.get(".city-entry").last()
          .should(($h1) => {
            expect($h1).to.have.prop("text", "DUSSELDORF 11");
          });
      });

    // should go to user-profile
    cy.get("#greeting-name-dropdown")
      .shadow()
      .find("a > span").click().debug()

    cy.get("#profile-link")
      .shadow()
      .find("a").click().then(() => {
      debugger;
    })

    const auth = {
      getProfile: () => {
        return user;
      },
    };

    const testUser = auth.getProfile();

    cy.wait(1000)

    cy.get("#details-headline")
      .should("contain", "Your User Details:");

    cy.get("#profile-image")
      .should("be.visible");

    cy.get("#name")
      .should("contain", `Name: ${testUser.name}`);

    cy.get("#email")
      .should("contain", `Email: ${testUser.email}`);

    cy.pause();

    cy.get("#greeting-name-dropdown")
      .shadow()
      .find("a > span").click()

    cy.get("#log-out-button")
      .shadow()
      .find("a").click({force: true})
    cy.wait(500);
    cy.url().should("eq", "http://localhost:4200/");

  });
});
