import { authInstance } from "./index.js";

function readTimeline(success, fail) {
  authInstance
    .get("api/timelines/", {})
    .then(success)
    .catch(fail);
}

function readTimlineEditMode(success, fail) {
  authInstance
    .get("api/timelines/edit", {})
    .then(success)
    .catch(fail);
}
export { readTimeline, readTimlineEditMode };
