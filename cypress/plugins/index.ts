import * as registerCodeCoverageTasks from "@cypress/code-coverage/task";
import { addMatchImageSnapshotPlugin } from "cypress-image-snapshot/plugin";
import * as cypressTypeScriptPreprocessor from "./cy-ts-preprocessor";

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
  on("file:preprocessor", cypressTypeScriptPreprocessor);
  registerCodeCoverageTasks(on, config);
  return config;
};
