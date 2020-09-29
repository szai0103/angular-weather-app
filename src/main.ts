import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {AppModule} from "./app/app.module";
import {environment} from "./environments/environment";

import {applyPolyfills, defineCustomElements} from "@scu/core-ui/dist/loader";
import "@scu/core-ui/dist/schwarz-core-ui/schwarz-core-ui.css";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

applyPolyfills().then(() => {
  defineCustomElements(window);
});
