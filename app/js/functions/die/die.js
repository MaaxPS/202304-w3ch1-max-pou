/* eslint-disable no-new */
import { IComponent } from "../../components/IComponent/IComponent.js";

export const die = (character, index) => {
  character.isAlive = false;
  const characterImg = document.querySelector(
    ".character__picture.card-img-top." + index
  );

  characterImg.style.transform = "rotate(180deg)";

  const state = document.querySelector(".stateLike." + index);
  new IComponent(state, "fas fa-thumbs-down " + index);

  document.querySelector(".fas.fa-thumbs-up." + index).remove();
};
