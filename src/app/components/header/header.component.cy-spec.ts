function cov_m6cblexqa() {
  var path = "/Users/sevilzaimova/WORKSPACE/DSS-Onbording/angular-weather-app/src/app/components/header/non-instr-header.component.cy-spec.ts";
  var hash = "58ab87fe45ecc66d0f532811ca7d983965fb5fe6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/sevilzaimova/WORKSPACE/DSS-Onbording/angular-weather-app/src/app/components/header/non-instr-header.component.cy-spec.ts",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 51,
          column: 3
        }
      },
      "1": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 19,
          column: 5
        }
      },
      "2": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 18,
          column: 7
        }
      },
      "3": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 24,
          column: 5
        }
      },
      "4": {
        start: {
          line: 22,
          column: 20
        },
        end: {
          line: 22,
          column: 42
        }
      },
      "5": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 28
        }
      },
      "6": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 31,
          column: 5
        }
      },
      "7": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 59
        }
      },
      "8": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 39
        }
      },
      "9": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 39,
          column: 5
        }
      },
      "10": {
        start: {
          line: 34,
          column: 17
        },
        end: {
          line: 34,
          column: 56
        }
      },
      "11": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 59
        }
      },
      "12": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
          column: 26
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 39
          },
          end: {
            line: 10,
            column: 40
          }
        },
        loc: {
          start: {
            line: 10,
            column: 45
          },
          end: {
            line: 51,
            column: 1
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 11,
            column: 13
          },
          end: {
            line: 11,
            column: 14
          }
        },
        loc: {
          start: {
            line: 11,
            column: 19
          },
          end: {
            line: 19,
            column: 3
          }
        },
        line: 11
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 21,
            column: 22
          },
          end: {
            line: 21,
            column: 23
          }
        },
        loc: {
          start: {
            line: 21,
            column: 28
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 21
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 27,
            column: 54
          },
          end: {
            line: 27,
            column: 55
          }
        },
        loc: {
          start: {
            line: 27,
            column: 60
          },
          end: {
            line: 31,
            column: 3
          }
        },
        line: 27
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 33,
            column: 59
          },
          end: {
            line: 33,
            column: 60
          }
        },
        loc: {
          start: {
            line: 33,
            column: 65
          },
          end: {
            line: 39,
            column: 3
          }
        },
        line: 33
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
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "58ab87fe45ecc66d0f532811ca7d983965fb5fe6"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_m6cblexqa = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_m6cblexqa();

/* tslint:disable */
/// <reference types="cypress" />
import { mount, initEnv, getCypressTestBed, setConfig } from "cypress-angular-unit-test";
import { AuthService } from "../../auth.service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { RouterLink } from "@angular/router";
import { HeaderComponent } from "./header.component";
cov_m6cblexqa().s[0]++;
describe("HeaderComponent Unit Tests", () => {
  cov_m6cblexqa().f[0]++;
  cov_m6cblexqa().s[1]++;
  beforeEach(() => {
    cov_m6cblexqa().f[1]++;
    cov_m6cblexqa().s[2]++;
    // setConfig({cssFile: 'node_modules/@scu/core-ui/dist/schwarz-core-ui/schwarz-core-ui.css'});
    // setConfig({ style: "../../../styles.scss" });
    initEnv(HeaderComponent, {
      providers: [AuthService, RouterLink],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule]
    });
  });
  cov_m6cblexqa().s[3]++;
  it('should create', () => {
    cov_m6cblexqa().f[2]++;
    const fixture = (cov_m6cblexqa().s[4]++, mount(HeaderComponent));
    cov_m6cblexqa().s[5]++;
    fixture.detectChanges();
  });
  cov_m6cblexqa().s[6]++;
  it("shows the title on the left corner on the top", () => {
    cov_m6cblexqa().f[3]++;
    cov_m6cblexqa().s[7]++;
    mount(HeaderComponent, {
      title: "Angular Weather App"
    });
    cov_m6cblexqa().s[8]++;
    cy.contains("Angular Weather App");
  });
  cov_m6cblexqa().s[9]++;
  it("shows LOG IN button on the right corner on the top", () => {
    cov_m6cblexqa().f[4]++;
    const auth = (cov_m6cblexqa().s[10]++, getCypressTestBed().inject(AuthService));
    cov_m6cblexqa().s[11]++;
    mount(HeaderComponent, {
      title: "Angular Weather App"
    });
    cov_m6cblexqa().s[12]++;
    cy.contains("LOG IN");
  }); // it("shows LOG IN button on the right corner on the top", () => {
  //   const auth = getCypressTestBed().inject(AuthService);
  //   cy.stub(auth["isLoggedIn"]).returned(true);
  //
  //   mount(HeaderComponent, {title: "Angular Weather App"});
  //
  //
  //   cy.contains("Hi, ");
  // });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vbi1pbnN0ci1oZWFkZXIuY29tcG9uZW50LmN5LXNwZWMudHMiXSwibmFtZXMiOlsibW91bnQiLCJpbml0RW52IiwiZ2V0Q3lwcmVzc1Rlc3RCZWQiLCJzZXRDb25maWciLCJBdXRoU2VydmljZSIsIkNVU1RPTV9FTEVNRU5UU19TQ0hFTUEiLCJSb3V0ZXJUZXN0aW5nTW9kdWxlIiwiUm91dGVyTGluayIsIkhlYWRlckNvbXBvbmVudCIsImRlc2NyaWJlIiwiYmVmb3JlRWFjaCIsInByb3ZpZGVycyIsInNjaGVtYXMiLCJpbXBvcnRzIiwiaXQiLCJmaXh0dXJlIiwiZGV0ZWN0Q2hhbmdlcyIsInRpdGxlIiwiY3kiLCJjb250YWlucyIsImF1dGgiLCJpbmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWjtBQUNBO0FBQ0EsU0FBUUEsS0FBUixFQUFlQyxPQUFmLEVBQXdCQyxpQkFBeEIsRUFBMkNDLFNBQTNDLFFBQTJELDJCQUEzRDtBQUNBLFNBQVFDLFdBQVIsUUFBMEIsb0JBQTFCO0FBQ0EsU0FBUUMsc0JBQVIsUUFBcUMsZUFBckM7QUFDQSxTQUFRQyxtQkFBUixRQUFrQyx5QkFBbEM7QUFDQSxTQUFRQyxVQUFSLFFBQXlCLGlCQUF6QjtBQUNBLFNBQVFDLGVBQVIsUUFBOEIsb0JBQTlCOztBQUVBQyxRQUFRLENBQUMsNEJBQUQsRUFBK0IsTUFBTTtBQUFBO0FBQUE7QUFDM0NDLEVBQUFBLFVBQVUsQ0FBQyxNQUFNO0FBQUE7QUFBQTtBQUNmO0FBQ0E7QUFDQVQsSUFBQUEsT0FBTyxDQUFDTyxlQUFELEVBQWtCO0FBQ3ZCRyxNQUFBQSxTQUFTLEVBQUUsQ0FBQ1AsV0FBRCxFQUFjRyxVQUFkLENBRFk7QUFFdkJLLE1BQUFBLE9BQU8sRUFBRSxDQUFDUCxzQkFBRCxDQUZjO0FBR3ZCUSxNQUFBQSxPQUFPLEVBQUUsQ0FBQ1AsbUJBQUQ7QUFIYyxLQUFsQixDQUFQO0FBS0QsR0FSUyxDQUFWO0FBRDJDO0FBVzNDUSxFQUFBQSxFQUFFLENBQUMsZUFBRCxFQUFrQixNQUFNO0FBQUE7QUFDeEIsVUFBTUMsT0FBTyw0QkFBR2YsS0FBSyxDQUFDUSxlQUFELENBQVIsQ0FBYjtBQUR3QjtBQUV4Qk8sSUFBQUEsT0FBTyxDQUFDQyxhQUFSO0FBQ0QsR0FIQyxDQUFGO0FBWDJDO0FBaUIzQ0YsRUFBQUEsRUFBRSxDQUFDLCtDQUFELEVBQWtELE1BQU07QUFBQTtBQUFBO0FBQ3hEZCxJQUFBQSxLQUFLLENBQUNRLGVBQUQsRUFBa0I7QUFBQ1MsTUFBQUEsS0FBSyxFQUFFO0FBQVIsS0FBbEIsQ0FBTDtBQUR3RDtBQUd4REMsSUFBQUEsRUFBRSxDQUFDQyxRQUFILENBQVkscUJBQVo7QUFDRCxHQUpDLENBQUY7QUFqQjJDO0FBdUIzQ0wsRUFBQUEsRUFBRSxDQUFDLG9EQUFELEVBQXVELE1BQU07QUFBQTtBQUM3RCxVQUFNTSxJQUFJLDZCQUFHbEIsaUJBQWlCLEdBQUdtQixNQUFwQixDQUEyQmpCLFdBQTNCLENBQUgsQ0FBVjtBQUQ2RDtBQUc3REosSUFBQUEsS0FBSyxDQUFDUSxlQUFELEVBQWtCO0FBQUNTLE1BQUFBLEtBQUssRUFBRTtBQUFSLEtBQWxCLENBQUw7QUFINkQ7QUFLN0RDLElBQUFBLEVBQUUsQ0FBQ0MsUUFBSCxDQUFZLFFBQVo7QUFDRCxHQU5DLENBQUYsQ0F2QjJDLENBK0IzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFRCxDQXpDTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiY3lwcmVzc1wiIC8+XG5pbXBvcnQge21vdW50LCBpbml0RW52LCBnZXRDeXByZXNzVGVzdEJlZCwgc2V0Q29uZmlnfSBmcm9tIFwiY3lwcmVzcy1hbmd1bGFyLXVuaXQtdGVzdFwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uLy4uL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtDVVNUT01fRUxFTUVOVFNfU0NIRU1BfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJUZXN0aW5nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyL3Rlc3RpbmdcIjtcbmltcG9ydCB7Um91dGVyTGlua30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gXCIuL2hlYWRlci5jb21wb25lbnRcIjtcblxuZGVzY3JpYmUoXCJIZWFkZXJDb21wb25lbnQgVW5pdCBUZXN0c1wiLCAoKSA9PiB7XG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIC8vIHNldENvbmZpZyh7Y3NzRmlsZTogJ25vZGVfbW9kdWxlcy9Ac2N1L2NvcmUtdWkvZGlzdC9zY2h3YXJ6LWNvcmUtdWkvc2Nod2Fyei1jb3JlLXVpLmNzcyd9KTtcbiAgICAvLyBzZXRDb25maWcoeyBzdHlsZTogXCIuLi8uLi8uLi9zdHlsZXMuc2Nzc1wiIH0pO1xuICAgIGluaXRFbnYoSGVhZGVyQ29tcG9uZW50LCB7XG4gICAgICBwcm92aWRlcnM6IFtBdXRoU2VydmljZSwgUm91dGVyTGlua10sXG4gICAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXG4gICAgICBpbXBvcnRzOiBbUm91dGVyVGVzdGluZ01vZHVsZV1cbiAgICB9KTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBjcmVhdGUnLCAoKSA9PiB7XG4gICAgY29uc3QgZml4dHVyZSA9IG1vdW50KEhlYWRlckNvbXBvbmVudCk7XG4gICAgZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG4gIH0pO1xuXG5cbiAgaXQoXCJzaG93cyB0aGUgdGl0bGUgb24gdGhlIGxlZnQgY29ybmVyIG9uIHRoZSB0b3BcIiwgKCkgPT4ge1xuICAgIG1vdW50KEhlYWRlckNvbXBvbmVudCwge3RpdGxlOiBcIkFuZ3VsYXIgV2VhdGhlciBBcHBcIn0pO1xuXG4gICAgY3kuY29udGFpbnMoXCJBbmd1bGFyIFdlYXRoZXIgQXBwXCIpO1xuICB9KTtcblxuICBpdChcInNob3dzIExPRyBJTiBidXR0b24gb24gdGhlIHJpZ2h0IGNvcm5lciBvbiB0aGUgdG9wXCIsICgpID0+IHtcbiAgICBjb25zdCBhdXRoID0gZ2V0Q3lwcmVzc1Rlc3RCZWQoKS5pbmplY3QoQXV0aFNlcnZpY2UpO1xuXG4gICAgbW91bnQoSGVhZGVyQ29tcG9uZW50LCB7dGl0bGU6IFwiQW5ndWxhciBXZWF0aGVyIEFwcFwifSk7XG5cbiAgICBjeS5jb250YWlucyhcIkxPRyBJTlwiKTtcbiAgfSk7XG5cbiAgLy8gaXQoXCJzaG93cyBMT0cgSU4gYnV0dG9uIG9uIHRoZSByaWdodCBjb3JuZXIgb24gdGhlIHRvcFwiLCAoKSA9PiB7XG4gIC8vICAgY29uc3QgYXV0aCA9IGdldEN5cHJlc3NUZXN0QmVkKCkuaW5qZWN0KEF1dGhTZXJ2aWNlKTtcbiAgLy8gICBjeS5zdHViKGF1dGhbXCJpc0xvZ2dlZEluXCJdKS5yZXR1cm5lZCh0cnVlKTtcbiAgLy9cbiAgLy8gICBtb3VudChIZWFkZXJDb21wb25lbnQsIHt0aXRsZTogXCJBbmd1bGFyIFdlYXRoZXIgQXBwXCJ9KTtcbiAgLy9cbiAgLy9cbiAgLy8gICBjeS5jb250YWlucyhcIkhpLCBcIik7XG4gIC8vIH0pO1xuXG59KTtcblxuIl19
