/* eslint-disable no-new */

import { DivComponent } from "../../components/DivComponent/DivComponent.js";
import { UlComponent } from "../../components/UlComponent/UlComponent.js";

export const addAppContainer = () => {
  const body = document.querySelector("body");

  new DivComponent(body, "app container");
  const appContainer = body.querySelector(".app.container");

  new UlComponent(appContainer, "characters-list row list-unstyled");
};
