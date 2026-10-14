// Reproduction: "TypeError: Class extends value undefined is not a constructor or null" (RealityTile.js) in `vite` dev.
//
// As written, this app FAILS. To make it WORK, move the `@itwin/core-electron` import above the
// `@itwin/core-frontend` import, then reload the page (no cache clearing needed).
import { IModelApp } from "@itwin/core-frontend";
import { ElectronApp } from "@itwin/core-electron/lib/cjs/ElectronFrontend";

document.querySelector("#app")!.textContent = `Loaded: ${typeof IModelApp}, ${typeof ElectronApp}`;
