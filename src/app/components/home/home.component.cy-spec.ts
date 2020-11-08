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


// function cov_2jwiwml15m() {
//   var path = "/Users/sevilzaimova/WORKSPACE/DSS-Onbording/angular-weather-app/src/app/components/home/home.component.cy-noninstr-spec.ts";
//   var hash = "677403a90255b8ff4a16638a1d710c84d30053a5";
//   var global = new Function("return this")();
//   var gcv = "__coverage__";
//   var coverageData = {
//     path: "/Users/sevilzaimova/WORKSPACE/DSS-Onbording/angular-weather-app/src/app/components/home/home.component.cy-noninstr-spec.ts",
//     statementMap: {
//       "0": {
//         start: {
//           line: 10,
//           column: 0
//         },
//         end: {
//           line: 31,
//           column: 1
//         }
//       },
//       "1": {
//         start: {
//           line: 12,
//           column: 2
//         },
//         end: {
//           line: 18,
//           column: 5
//         }
//       },
//       "2": {
//         start: {
//           line: 13,
//           column: 4
//         },
//         end: {
//           line: 17,
//           column: 7
//         }
//       },
//       "3": {
//         start: {
//           line: 20,
//           column: 2
//         },
//         end: {
//           line: 23,
//           column: 5
//         }
//       },
//       "4": {
//         start: {
//           line: 21,
//           column: 20
//         },
//         end: {
//           line: 21,
//           column: 72
//         }
//       },
//       "5": {
//         start: {
//           line: 22,
//           column: 4
//         },
//         end: {
//           line: 22,
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
//           column: 57
//         }
//       },
//       "8": {
//         start: {
//           line: 28,
//           column: 4
//         },
//         end: {
//           line: 28,
//           column: 78
//         }
//       }
//     },
//     fnMap: {
//       "0": {
//         name: "(anonymous_0)",
//         decl: {
//           start: {
//             line: 10,
//             column: 28
//           },
//           end: {
//             line: 10,
//             column: 29
//           }
//         },
//         loc: {
//           start: {
//             line: 10,
//             column: 34
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
//             line: 12,
//             column: 13
//           },
//           end: {
//             line: 12,
//             column: 14
//           }
//         },
//         loc: {
//           start: {
//             line: 12,
//             column: 19
//           },
//           end: {
//             line: 18,
//             column: 3
//           }
//         },
//         line: 12
//       },
//       "2": {
//         name: "(anonymous_2)",
//         decl: {
//           start: {
//             line: 20,
//             column: 22
//           },
//           end: {
//             line: 20,
//             column: 23
//           }
//         },
//         loc: {
//           start: {
//             line: 20,
//             column: 28
//           },
//           end: {
//             line: 23,
//             column: 3
//           }
//         },
//         line: 20
//       },
//       "3": {
//         name: "(anonymous_3)",
//         decl: {
//           start: {
//             line: 25,
//             column: 40
//           },
//           end: {
//             line: 25,
//             column: 41
//           }
//         },
//         loc: {
//           start: {
//             line: 25,
//             column: 46
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
//     hash: "677403a90255b8ff4a16638a1d710c84d30053a5"
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
//     cov_2jwiwml15m = function () {
//       return actualCoverage;
//     };
//   }
//   return actualCoverage;
// }
//
// cov_2jwiwml15m();
//
// /* tslint:disable */
// /// <reference types="cypress" />
// import { mount, initEnv } from 'cypress-angular-unit-test';
// import { HomeComponent } from './home.component';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { RouterTestingModule } from '@angular/router/testing';
// import { RouterLink } from '@angular/router';
// import { AuthService } from "../../auth.service";
// cov_2jwiwml15m().s[0]++;
// describe('Home Unit Tests', () => {
//   cov_2jwiwml15m().f[0]++;
//   cov_2jwiwml15m().s[1]++;
//   beforeEach(() => {
//     cov_2jwiwml15m().f[1]++;
//     cov_2jwiwml15m().s[2]++;
//     initEnv(HomeComponent, {
//       providers: [AuthService, RouterLink],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//       imports: [RouterTestingModule]
//     });
//   });
//   cov_2jwiwml15m().s[3]++;
//   it('should create', () => {
//     cov_2jwiwml15m().f[2]++;
//     const fixture = (cov_2jwiwml15m().s[4]++, mount(HomeComponent, {
//       title: 'Angular Weather App'
//     }));
//     cov_2jwiwml15m().s[5]++;
//     fixture.detectChanges();
//   });
//   cov_2jwiwml15m().s[6]++;
//   it('shows message to guide to login', () => {
//     cov_2jwiwml15m().f[3]++;
//     cov_2jwiwml15m().s[7]++;
//     mount(HomeComponent, {
//       title: 'Angular Weather App'
//     });
//     cov_2jwiwml15m().s[8]++;
//     cy.contains('Please, Log in by clicking on the button above to proceed!');
//   });
// });
// //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmN5LW5vbmluc3RyLXNwZWMudHMiXSwibmFtZXMiOlsibW91bnQiLCJpbml0RW52IiwiSG9tZUNvbXBvbmVudCIsIkNVU1RPTV9FTEVNRU5UU19TQ0hFTUEiLCJSb3V0ZXJUZXN0aW5nTW9kdWxlIiwiUm91dGVyTGluayIsIkF1dGhTZXJ2aWNlIiwiZGVzY3JpYmUiLCJiZWZvcmVFYWNoIiwicHJvdmlkZXJzIiwic2NoZW1hcyIsImltcG9ydHMiLCJpdCIsImZpeHR1cmUiLCJ0aXRsZSIsImRldGVjdENoYW5nZXMiLCJjeSIsImNvbnRhaW5zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7O0FBZlo7QUFDQTtBQUNBLFNBQVFBLEtBQVIsRUFBZUMsT0FBZixRQUE2QiwyQkFBN0I7QUFDQSxTQUFRQyxhQUFSLFFBQTRCLGtCQUE1QjtBQUNBLFNBQVFDLHNCQUFSLFFBQXFDLGVBQXJDO0FBQ0EsU0FBUUMsbUJBQVIsUUFBa0MseUJBQWxDO0FBQ0EsU0FBUUMsVUFBUixRQUF5QixpQkFBekI7QUFDQSxTQUFRQyxXQUFSLFFBQTBCLG9CQUExQjs7QUFFQUMsUUFBUSxDQUFDLGlCQUFELEVBQW9CLE1BQU07QUFBQTtBQUFBO0FBRWhDQyxFQUFBQSxVQUFVLENBQUMsTUFBTTtBQUFBO0FBQUE7QUFDZlAsSUFBQUEsT0FBTyxDQUFDQyxhQUFELEVBQWdCO0FBQ3JCTyxNQUFBQSxTQUFTLEVBQUUsQ0FBQ0gsV0FBRCxFQUFjRCxVQUFkLENBRFU7QUFFckJLLE1BQUFBLE9BQU8sRUFBRSxDQUFDUCxzQkFBRCxDQUZZO0FBR3JCUSxNQUFBQSxPQUFPLEVBQUUsQ0FBQ1AsbUJBQUQ7QUFIWSxLQUFoQixDQUFQO0FBS0QsR0FOUyxDQUFWO0FBRmdDO0FBVWhDUSxFQUFBQSxFQUFFLENBQUMsZUFBRCxFQUFrQixNQUFNO0FBQUE7QUFDeEIsVUFBTUMsT0FBTyw2QkFBR2IsS0FBSyxDQUFDRSxhQUFELEVBQWdCO0FBQUNZLE1BQUFBLEtBQUssRUFBRTtBQUFSLEtBQWhCLENBQVIsQ0FBYjtBQUR3QjtBQUV4QkQsSUFBQUEsT0FBTyxDQUFDRSxhQUFSO0FBQ0QsR0FIQyxDQUFGO0FBVmdDO0FBZWhDSCxFQUFBQSxFQUFFLENBQUMsaUNBQUQsRUFBb0MsTUFBTTtBQUFBO0FBQUE7QUFDMUNaLElBQUFBLEtBQUssQ0FBQ0UsYUFBRCxFQUFnQjtBQUFDWSxNQUFBQSxLQUFLLEVBQUU7QUFBUixLQUFoQixDQUFMO0FBRDBDO0FBRzFDRSxJQUFBQSxFQUFFLENBQUNDLFFBQUgsQ0FBWSw0REFBWjtBQUNELEdBSkMsQ0FBRjtBQUtELENBcEJPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjeXByZXNzXCIgLz5cbmltcG9ydCB7bW91bnQsIGluaXRFbnZ9IGZyb20gJ2N5cHJlc3MtYW5ndWxhci11bml0LXRlc3QnO1xuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7Q1VTVE9NX0VMRU1FTlRTX1NDSEVNQX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlclRlc3RpbmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci90ZXN0aW5nJztcbmltcG9ydCB7Um91dGVyTGlua30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi8uLi9hdXRoLnNlcnZpY2VcIjtcblxuZGVzY3JpYmUoJ0hvbWUgVW5pdCBUZXN0cycsICgpID0+IHtcblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBpbml0RW52KEhvbWVDb21wb25lbnQsIHtcbiAgICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlLCBSb3V0ZXJMaW5rXSxcbiAgICAgIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcbiAgICAgIGltcG9ydHM6IFtSb3V0ZXJUZXN0aW5nTW9kdWxlXVxuICAgIH0pO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGNyZWF0ZScsICgpID0+IHtcbiAgICBjb25zdCBmaXh0dXJlID0gbW91bnQoSG9tZUNvbXBvbmVudCwge3RpdGxlOiAnQW5ndWxhciBXZWF0aGVyIEFwcCd9KTtcbiAgICBmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3dzIG1lc3NhZ2UgdG8gZ3VpZGUgdG8gbG9naW4nLCAoKSA9PiB7XG4gICAgbW91bnQoSG9tZUNvbXBvbmVudCwge3RpdGxlOiAnQW5ndWxhciBXZWF0aGVyIEFwcCd9KTtcblxuICAgIGN5LmNvbnRhaW5zKCdQbGVhc2UsIExvZyBpbiBieSBjbGlja2luZyBvbiB0aGUgYnV0dG9uIGFib3ZlIHRvIHByb2NlZWQhJyk7XG4gIH0pO1xufSlcbjtcbiJdfQ==
