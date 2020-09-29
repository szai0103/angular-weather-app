function cov_2khxchuvdu() {
  var path = "/Users/sevilzaimova/WORKSPACE/DSS-Onbording/angular-weather-app/src/app/components/home/non-instr-home.component.cy-spec.ts";
  var hash = "eb34d535efc81357ee7bb3e6abf35b0a5e026d83";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/sevilzaimova/WORKSPACE/DSS-Onbording/angular-weather-app/src/app/components/home/non-instr-home.component.cy-spec.ts",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 47,
          column: 1
        }
      },
      "1": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 25,
          column: 5
        }
      },
      "2": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 24,
          column: 7
        }
      },
      "3": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 30,
          column: 5
        }
      },
      "4": {
        start: {
          line: 28,
          column: 20
        },
        end: {
          line: 28,
          column: 72
        }
      },
      "5": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 28
        }
      },
      "6": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 36,
          column: 5
        }
      },
      "7": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 57
        }
      },
      "8": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 78
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 28
          },
          end: {
            line: 10,
            column: 29
          }
        },
        loc: {
          start: {
            line: 10,
            column: 34
          },
          end: {
            line: 46,
            column: 1
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 13
          },
          end: {
            line: 12,
            column: 14
          }
        },
        loc: {
          start: {
            line: 12,
            column: 19
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 12
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 27,
            column: 22
          },
          end: {
            line: 27,
            column: 23
          }
        },
        loc: {
          start: {
            line: 27,
            column: 28
          },
          end: {
            line: 30,
            column: 3
          }
        },
        line: 27
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 32,
            column: 40
          },
          end: {
            line: 32,
            column: 41
          }
        },
        loc: {
          start: {
            line: 32,
            column: 46
          },
          end: {
            line: 36,
            column: 3
          }
        },
        line: 32
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "eb34d535efc81357ee7bb3e6abf35b0a5e026d83"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2khxchuvdu = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2khxchuvdu();

/* tslint:disable */
/// <reference types="cypress" />
import { mount, initEnv, getCypressTestBed, setConfig } from 'cypress-angular-unit-test';
import { HomeComponent } from './home.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLink } from '@angular/router';
import { AuthService } from "../../auth.service";
cov_2khxchuvdu().s[0]++;
describe('Home Unit Tests', () => {
  cov_2khxchuvdu().f[0]++;
  cov_2khxchuvdu().s[1]++;
  beforeEach(() => {
    cov_2khxchuvdu().f[1]++;
    cov_2khxchuvdu().s[2]++;
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
  cov_2khxchuvdu().s[3]++;
  it('should create', () => {
    cov_2khxchuvdu().f[2]++;
    const fixture = (cov_2khxchuvdu().s[4]++, mount(HomeComponent, {
      title: 'Angular Weather App'
    }));
    cov_2khxchuvdu().s[5]++;
    fixture.detectChanges();
  });
  cov_2khxchuvdu().s[6]++;
  it('shows message to guide to login', () => {
    cov_2khxchuvdu().f[3]++;
    cov_2khxchuvdu().s[7]++;
    mount(HomeComponent, {
      title: 'Angular Weather App'
    });
    cov_2khxchuvdu().s[8]++;
    cy.contains('Please, Log in by clicking on the button above to proceed!');
  }); // it('if is logged in shows the welcoming message with title', () => {
  //   const auth = getCypressTestBed().inject(AuthService);
  //   cy.stub(auth, "isLoggedIn").returns(true);
  //
  //   mount(HomeComponent, {title: 'Angular Weather App'});
  //
  //   cy.contains('Welcome to Angular Weather App!');
  // });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vbi1pbnN0ci1ob21lLmNvbXBvbmVudC5jeS1zcGVjLnRzIl0sIm5hbWVzIjpbIm1vdW50IiwiaW5pdEVudiIsImdldEN5cHJlc3NUZXN0QmVkIiwic2V0Q29uZmlnIiwiSG9tZUNvbXBvbmVudCIsIkNVU1RPTV9FTEVNRU5UU19TQ0hFTUEiLCJSb3V0ZXJUZXN0aW5nTW9kdWxlIiwiUm91dGVyTGluayIsIkF1dGhTZXJ2aWNlIiwiZGVzY3JpYmUiLCJiZWZvcmVFYWNoIiwicHJvdmlkZXJzIiwic2NoZW1hcyIsImltcG9ydHMiLCJpdCIsImZpeHR1cmUiLCJ0aXRsZSIsImRldGVjdENoYW5nZXMiLCJjeSIsImNvbnRhaW5zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7O0FBZlo7QUFDQTtBQUNBLFNBQVFBLEtBQVIsRUFBZUMsT0FBZixFQUF3QkMsaUJBQXhCLEVBQTJDQyxTQUEzQyxRQUEyRCwyQkFBM0Q7QUFDQSxTQUFRQyxhQUFSLFFBQTRCLGtCQUE1QjtBQUNBLFNBQVFDLHNCQUFSLFFBQXFDLGVBQXJDO0FBQ0EsU0FBUUMsbUJBQVIsUUFBa0MseUJBQWxDO0FBQ0EsU0FBUUMsVUFBUixRQUF5QixpQkFBekI7QUFDQSxTQUFRQyxXQUFSLFFBQTBCLG9CQUExQjs7QUFFQUMsUUFBUSxDQUFDLGlCQUFELEVBQW9CLE1BQU07QUFBQTtBQUFBO0FBRWhDQyxFQUFBQSxVQUFVLENBQUMsTUFBTTtBQUFBO0FBQUE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBVCxJQUFBQSxPQUFPLENBQUNHLGFBQUQsRUFBZ0I7QUFDckJPLE1BQUFBLFNBQVMsRUFBRSxDQUFDSCxXQUFELEVBQWNELFVBQWQsQ0FEVTtBQUVyQkssTUFBQUEsT0FBTyxFQUFFLENBQUNQLHNCQUFELENBRlk7QUFHckJRLE1BQUFBLE9BQU8sRUFBRSxDQUFDUCxtQkFBRDtBQUhZLEtBQWhCLENBQVA7QUFLRCxHQWJTLENBQVY7QUFGZ0M7QUFpQmhDUSxFQUFBQSxFQUFFLENBQUMsZUFBRCxFQUFrQixNQUFNO0FBQUE7QUFDeEIsVUFBTUMsT0FBTyw2QkFBR2YsS0FBSyxDQUFDSSxhQUFELEVBQWdCO0FBQUNZLE1BQUFBLEtBQUssRUFBRTtBQUFSLEtBQWhCLENBQVIsQ0FBYjtBQUR3QjtBQUV4QkQsSUFBQUEsT0FBTyxDQUFDRSxhQUFSO0FBQ0QsR0FIQyxDQUFGO0FBakJnQztBQXNCaENILEVBQUFBLEVBQUUsQ0FBQyxpQ0FBRCxFQUFvQyxNQUFNO0FBQUE7QUFBQTtBQUMxQ2QsSUFBQUEsS0FBSyxDQUFDSSxhQUFELEVBQWdCO0FBQUNZLE1BQUFBLEtBQUssRUFBRTtBQUFSLEtBQWhCLENBQUw7QUFEMEM7QUFHMUNFLElBQUFBLEVBQUUsQ0FBQ0MsUUFBSCxDQUFZLDREQUFaO0FBQ0QsR0FKQyxDQUFGLENBdEJnQyxDQTRCaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELENBcENPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjeXByZXNzXCIgLz5cbmltcG9ydCB7bW91bnQsIGluaXRFbnYsIGdldEN5cHJlc3NUZXN0QmVkLCBzZXRDb25maWd9IGZyb20gJ2N5cHJlc3MtYW5ndWxhci11bml0LXRlc3QnO1xuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7Q1VTVE9NX0VMRU1FTlRTX1NDSEVNQX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlclRlc3RpbmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci90ZXN0aW5nJztcbmltcG9ydCB7Um91dGVyTGlua30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi8uLi9hdXRoLnNlcnZpY2VcIjtcblxuZGVzY3JpYmUoJ0hvbWUgVW5pdCBUZXN0cycsICgpID0+IHtcblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAvLyBzZXRDb25maWcoeyBjc3NGaWxlOiAnbm9kZV9tb2R1bGVzL0BzY3UvY29yZS11aS9kaXN0L3NjaHdhcnotY29yZS11aS9zY2h3YXJ6LWNvcmUtdWkuY3NzJyB9KTtcbiAgICAvLyBzZXRDb25maWcoe1xuICAgIC8vICAgY3NzRmlsZXM6IFtcbiAgICAvLyAgICAgJ25vZGVfbW9kdWxlcy9Ac2N1L2NvcmUtdWkvZGlzdC9zY2h3YXJ6LWNvcmUtdWkvc2Nod2Fyei1jb3JlLXVpLmNzcycsXG4gICAgLy8gICAgICdub2RlX21vZHVsZXMvcHJpbWVuZy9yZXNvdXJjZXMvcHJpbWVuZy5taW4uY3NzJ1xuICAgIC8vICAgXVxuICAgIC8vIH0pO1xuICAgIGluaXRFbnYoSG9tZUNvbXBvbmVudCwge1xuICAgICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2UsIFJvdXRlckxpbmtdLFxuICAgICAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxuICAgICAgaW1wb3J0czogW1JvdXRlclRlc3RpbmdNb2R1bGVdXG4gICAgfSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgY3JlYXRlJywgKCkgPT4ge1xuICAgIGNvbnN0IGZpeHR1cmUgPSBtb3VudChIb21lQ29tcG9uZW50LCB7dGl0bGU6ICdBbmd1bGFyIFdlYXRoZXIgQXBwJ30pO1xuICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICB9KTtcblxuICBpdCgnc2hvd3MgbWVzc2FnZSB0byBndWlkZSB0byBsb2dpbicsICgpID0+IHtcbiAgICBtb3VudChIb21lQ29tcG9uZW50LCB7dGl0bGU6ICdBbmd1bGFyIFdlYXRoZXIgQXBwJ30pO1xuXG4gICAgY3kuY29udGFpbnMoJ1BsZWFzZSwgTG9nIGluIGJ5IGNsaWNraW5nIG9uIHRoZSBidXR0b24gYWJvdmUgdG8gcHJvY2VlZCEnKTtcbiAgfSk7XG5cbiAgLy8gaXQoJ2lmIGlzIGxvZ2dlZCBpbiBzaG93cyB0aGUgd2VsY29taW5nIG1lc3NhZ2Ugd2l0aCB0aXRsZScsICgpID0+IHtcbiAgLy8gICBjb25zdCBhdXRoID0gZ2V0Q3lwcmVzc1Rlc3RCZWQoKS5pbmplY3QoQXV0aFNlcnZpY2UpO1xuICAvLyAgIGN5LnN0dWIoYXV0aCwgXCJpc0xvZ2dlZEluXCIpLnJldHVybnModHJ1ZSk7XG4gIC8vXG4gIC8vICAgbW91bnQoSG9tZUNvbXBvbmVudCwge3RpdGxlOiAnQW5ndWxhciBXZWF0aGVyIEFwcCd9KTtcbiAgLy9cbiAgLy8gICBjeS5jb250YWlucygnV2VsY29tZSB0byBBbmd1bGFyIFdlYXRoZXIgQXBwIScpO1xuICAvLyB9KTtcbn0pXG47XG4iXX0=
