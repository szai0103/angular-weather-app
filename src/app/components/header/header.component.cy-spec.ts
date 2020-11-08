/* tslint:disable */
/// <reference types="cypress" />
import {mount, initEnv} from "cypress-angular-unit-test";
import {AuthService} from "../../auth.service";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {RouterLink} from "@angular/router";
import {HeaderComponent} from "./header.component";

describe("HeaderComponent Unit Tests", () => {
  beforeEach(() => {
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
});




// function cov_c3ynxvew8() {
//   var path = "/Users/sevilzaimova/WORKSPACE/DSS-Onbording/angular-weather-app/src/app/components/header/header.component.cy-noninstr-spec.ts";
//   var hash = "c872b60e72b220fe8bcfddb1f0237bd085fee254";
//   var global = new Function("return this")();
//   var gcv = "__coverage__";
//   var coverageData = {
//     path: "/Users/sevilzaimova/WORKSPACE/DSS-Onbording/angular-weather-app/src/app/components/header/header.component.cy-noninstr-spec.ts",
//     statementMap: {
//       "0": {
//         start: {
//           line: 10,
//           column: 0
//         },
//         end: {
//           line: 30,
//           column: 3
//         }
//       },
//       "1": {
//         start: {
//           line: 11,
//           column: 2
//         },
//         end: {
//           line: 17,
//           column: 5
//         }
//       },
//       "2": {
//         start: {
//           line: 12,
//           column: 4
//         },
//         end: {
//           line: 16,
//           column: 7
//         }
//       },
//       "3": {
//         start: {
//           line: 19,
//           column: 2
//         },
//         end: {
//           line: 22,
//           column: 5
//         }
//       },
//       "4": {
//         start: {
//           line: 20,
//           column: 20
//         },
//         end: {
//           line: 20,
//           column: 42
//         }
//       },
//       "5": {
//         start: {
//           line: 21,
//           column: 4
//         },
//         end: {
//           line: 21,
//           column: 28
//         }
//       },
//       "6": {
//         start: {
//           line: 25,
//           column: 2
//         },
//         end: {
//           line: 29,
//           column: 5
//         }
//       },
//       "7": {
//         start: {
//           line: 26,
//           column: 4
//         },
//         end: {
//           line: 26,
//           column: 59
//         }
//       },
//       "8": {
//         start: {
//           line: 28,
//           column: 4
//         },
//         end: {
//           line: 28,
//           column: 39
//         }
//       }
//     },
//     fnMap: {
//       "0": {
//         name: "(anonymous_0)",
//         decl: {
//           start: {
//             line: 10,
//             column: 39
//           },
//           end: {
//             line: 10,
//             column: 40
//           }
//         },
//         loc: {
//           start: {
//             line: 10,
//             column: 45
//           },
//           end: {
//             line: 30,
//             column: 1
//           }
//         },
//         line: 10
//       },
//       "1": {
//         name: "(anonymous_1)",
//         decl: {
//           start: {
//             line: 11,
//             column: 13
//           },
//           end: {
//             line: 11,
//             column: 14
//           }
//         },
//         loc: {
//           start: {
//             line: 11,
//             column: 19
//           },
//           end: {
//             line: 17,
//             column: 3
//           }
//         },
//         line: 11
//       },
//       "2": {
//         name: "(anonymous_2)",
//         decl: {
//           start: {
//             line: 19,
//             column: 22
//           },
//           end: {
//             line: 19,
//             column: 23
//           }
//         },
//         loc: {
//           start: {
//             line: 19,
//             column: 28
//           },
//           end: {
//             line: 22,
//             column: 3
//           }
//         },
//         line: 19
//       },
//       "3": {
//         name: "(anonymous_3)",
//         decl: {
//           start: {
//             line: 25,
//             column: 54
//           },
//           end: {
//             line: 25,
//             column: 55
//           }
//         },
//         loc: {
//           start: {
//             line: 25,
//             column: 60
//           },
//           end: {
//             line: 29,
//             column: 3
//           }
//         },
//         line: 25
//       }
//     },
//     branchMap: {},
//     s: {
//       "0": 0,
//       "1": 0,
//       "2": 0,
//       "3": 0,
//       "4": 0,
//       "5": 0,
//       "6": 0,
//       "7": 0,
//       "8": 0
//     },
//     f: {
//       "0": 0,
//       "1": 0,
//       "2": 0,
//       "3": 0
//     },
//     b: {},
//     _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
//     hash: "c872b60e72b220fe8bcfddb1f0237bd085fee254"
//   };
//   var coverage = global[gcv] || (global[gcv] = {});
//
//   if (!coverage[path] || coverage[path].hash !== hash) {
//     coverage[path] = coverageData;
//   }
//
//   var actualCoverage = coverage[path];
//   {
//     // @ts-ignore
//     cov_c3ynxvew8 = function () {
//       return actualCoverage;
//     };
//   }
//   return actualCoverage;
// }
//
// cov_c3ynxvew8();
//
// /* tslint:disable */
// /// <reference types="cypress" />
// import { mount, initEnv } from "cypress-angular-unit-test";
// import { AuthService } from "../../auth.service";
// import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
// import { RouterTestingModule } from "@angular/router/testing";
// import { RouterLink } from "@angular/router";
// import { HeaderComponent } from "./header.component";
// cov_c3ynxvew8().s[0]++;
// describe("HeaderComponent Unit Tests", () => {
//   cov_c3ynxvew8().f[0]++;
//   cov_c3ynxvew8().s[1]++;
//   beforeEach(() => {
//     cov_c3ynxvew8().f[1]++;
//     cov_c3ynxvew8().s[2]++;
//     initEnv(HeaderComponent, {
//       providers: [AuthService, RouterLink],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//       imports: [RouterTestingModule]
//     });
//   });
//   cov_c3ynxvew8().s[3]++;
//   it('should create', () => {
//     cov_c3ynxvew8().f[2]++;
//     const fixture = (cov_c3ynxvew8().s[4]++, mount(HeaderComponent));
//     cov_c3ynxvew8().s[5]++;
//     fixture.detectChanges();
//   });
//   cov_c3ynxvew8().s[6]++;
//   it("shows the title on the left corner on the top", () => {
//     cov_c3ynxvew8().f[3]++;
//     cov_c3ynxvew8().s[7]++;
//     mount(HeaderComponent, {
//       title: "Angular Weather App"
//     });
//     cov_c3ynxvew8().s[8]++;
//     cy.contains("Angular Weather App");
//   });
// });
// //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3ktbm9uaW5zdHItc3BlYy50cyJdLCJuYW1lcyI6WyJtb3VudCIsImluaXRFbnYiLCJBdXRoU2VydmljZSIsIkNVU1RPTV9FTEVNRU5UU19TQ0hFTUEiLCJSb3V0ZXJUZXN0aW5nTW9kdWxlIiwiUm91dGVyTGluayIsIkhlYWRlckNvbXBvbmVudCIsImRlc2NyaWJlIiwiYmVmb3JlRWFjaCIsInByb3ZpZGVycyIsInNjaGVtYXMiLCJpbXBvcnRzIiwiaXQiLCJmaXh0dXJlIiwiZGV0ZWN0Q2hhbmdlcyIsInRpdGxlIiwiY3kiLCJjb250YWlucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7OztBQWZaO0FBQ0E7QUFDQSxTQUFRQSxLQUFSLEVBQWVDLE9BQWYsUUFBNkIsMkJBQTdCO0FBQ0EsU0FBUUMsV0FBUixRQUEwQixvQkFBMUI7QUFDQSxTQUFRQyxzQkFBUixRQUFxQyxlQUFyQztBQUNBLFNBQVFDLG1CQUFSLFFBQWtDLHlCQUFsQztBQUNBLFNBQVFDLFVBQVIsUUFBeUIsaUJBQXpCO0FBQ0EsU0FBUUMsZUFBUixRQUE4QixvQkFBOUI7O0FBRUFDLFFBQVEsQ0FBQyw0QkFBRCxFQUErQixNQUFNO0FBQUE7QUFBQTtBQUMzQ0MsRUFBQUEsVUFBVSxDQUFDLE1BQU07QUFBQTtBQUFBO0FBQ2ZQLElBQUFBLE9BQU8sQ0FBQ0ssZUFBRCxFQUFrQjtBQUN2QkcsTUFBQUEsU0FBUyxFQUFFLENBQUNQLFdBQUQsRUFBY0csVUFBZCxDQURZO0FBRXZCSyxNQUFBQSxPQUFPLEVBQUUsQ0FBQ1Asc0JBQUQsQ0FGYztBQUd2QlEsTUFBQUEsT0FBTyxFQUFFLENBQUNQLG1CQUFEO0FBSGMsS0FBbEIsQ0FBUDtBQUtELEdBTlMsQ0FBVjtBQUQyQztBQVMzQ1EsRUFBQUEsRUFBRSxDQUFDLGVBQUQsRUFBa0IsTUFBTTtBQUFBO0FBQ3hCLFVBQU1DLE9BQU8sNEJBQUdiLEtBQUssQ0FBQ00sZUFBRCxDQUFSLENBQWI7QUFEd0I7QUFFeEJPLElBQUFBLE9BQU8sQ0FBQ0MsYUFBUjtBQUNELEdBSEMsQ0FBRjtBQVQyQztBQWUzQ0YsRUFBQUEsRUFBRSxDQUFDLCtDQUFELEVBQWtELE1BQU07QUFBQTtBQUFBO0FBQ3hEWixJQUFBQSxLQUFLLENBQUNNLGVBQUQsRUFBa0I7QUFBQ1MsTUFBQUEsS0FBSyxFQUFFO0FBQVIsS0FBbEIsQ0FBTDtBQUR3RDtBQUd4REMsSUFBQUEsRUFBRSxDQUFDQyxRQUFILENBQVkscUJBQVo7QUFDRCxHQUpDLENBQUY7QUFLRCxDQXBCTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiY3lwcmVzc1wiIC8+XG5pbXBvcnQge21vdW50LCBpbml0RW52fSBmcm9tIFwiY3lwcmVzcy1hbmd1bGFyLXVuaXQtdGVzdFwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uLy4uL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtDVVNUT01fRUxFTUVOVFNfU0NIRU1BfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJUZXN0aW5nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyL3Rlc3RpbmdcIjtcbmltcG9ydCB7Um91dGVyTGlua30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gXCIuL2hlYWRlci5jb21wb25lbnRcIjtcblxuZGVzY3JpYmUoXCJIZWFkZXJDb21wb25lbnQgVW5pdCBUZXN0c1wiLCAoKSA9PiB7XG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGluaXRFbnYoSGVhZGVyQ29tcG9uZW50LCB7XG4gICAgICBwcm92aWRlcnM6IFtBdXRoU2VydmljZSwgUm91dGVyTGlua10sXG4gICAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXG4gICAgICBpbXBvcnRzOiBbUm91dGVyVGVzdGluZ01vZHVsZV1cbiAgICB9KTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBjcmVhdGUnLCAoKSA9PiB7XG4gICAgY29uc3QgZml4dHVyZSA9IG1vdW50KEhlYWRlckNvbXBvbmVudCk7XG4gICAgZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG4gIH0pO1xuXG5cbiAgaXQoXCJzaG93cyB0aGUgdGl0bGUgb24gdGhlIGxlZnQgY29ybmVyIG9uIHRoZSB0b3BcIiwgKCkgPT4ge1xuICAgIG1vdW50KEhlYWRlckNvbXBvbmVudCwge3RpdGxlOiBcIkFuZ3VsYXIgV2VhdGhlciBBcHBcIn0pO1xuXG4gICAgY3kuY29udGFpbnMoXCJBbmd1bGFyIFdlYXRoZXIgQXBwXCIpO1xuICB9KTtcbn0pO1xuXG4iXX0=
