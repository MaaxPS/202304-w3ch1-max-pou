/* eslint-disable no-new */
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent.js";
import { Comunications } from "../../components/Comunications/Comunications.js";
import { DivComponent } from "../../components/DivComponent/DivComponent.js";
import { H2Component } from "../../components/H2Component/H2Component.js";
import { IComponent } from "../../components/IComponent/IComponent.js";
import { ImgComponent } from "../../components/ImgComponent/ImgComponent.js";
import { LiComponent } from "../../components/LiComponent/LiComponent.js";
import { UlComponent } from "../../components/UlComponent/UlComponent.js";
import { speak } from "../speak/speak.js";
import { die } from "../die/die.js";

export const createCard = (character, index) => {
  const body = document.querySelector("body");

  const charactersList = document.querySelector(
    ".characters-list.row.list-unstyled"
  );

  new LiComponent(charactersList, "character col " + index);
  const column = charactersList.querySelector(".character.col." + index);

  new DivComponent(column, "card character__card " + index);
  const card = column.querySelector(".card.character__card." + index);

  new ImgComponent(
    card,
    "character__picture card-img-top " + index,
    character.characterData.imageSource
  );

  new DivComponent(card, "card-body " + index);
  const cardBody = card.querySelector(".card-body." + index);

  new IComponent(card, "emoji " + index);
  const emoji = card.querySelector(".emoji." + index);

  new H2Component(
    cardBody,
    "character__name card-title h4 " + index,
    character.characterData.name + " " + character.characterData.family
  );

  new DivComponent(cardBody, "character__info " + index);
  const characterInfo = cardBody.querySelector(".character__info." + index);

  new DivComponent(cardBody, "character__overlay " + index);
  const characterOverlay = cardBody.querySelector(
    ".character__overlay." + index
  );

  new UlComponent(characterInfo, "list-unstyled " + index);
  const ageState = characterInfo.querySelector(".list-unstyled." + index);

  new LiComponent(
    ageState,
    " " + index,
    "Age: " + character.characterData.age + " yrs"
  );

  new LiComponent(ageState, "stateLike " + index, "State: ");
  const state = ageState.querySelector(".stateLike." + index);

  new IComponent(state, "fas fa-thumbs-up " + index);

  new UlComponent(characterOverlay, "list-unstyled " + index);
  const unstyled = characterOverlay.querySelector(".list-unstyled." + index);

  new DivComponent(characterOverlay, "character__actions " + index);
  const actions = characterOverlay.querySelector(
    ".character__actions." + index
  );

  new ButtonComponent(actions, "character__action btn speak " + index, "speak");
  const buttonSpeak = actions.querySelector(
    ".character__action.btn.speak." + index
  );

  new ButtonComponent(actions, "character__action btn die " + index, "die");
  const buttonDie = actions.querySelector(
    ".character__action.btn.die." + index
  );

  buttonSpeak.addEventListener("click", () => {
    speak(index);
  });

  buttonDie.addEventListener("click", () => {
    die(character, index);
  });

  if ("advises" in character) {
    new LiComponent(
      unstyled,
      " " + index,
      "Advises to: " + character.advises.characterData.name
    );
    emoji.textContent = "🎓";
  }

  if ("dexterity" in character && "weapon" in character) {
    new LiComponent(unstyled, " " + index, "Weapon: " + character.weapon);
    new LiComponent(unstyled, " " + index, "Dexterity: " + character.dexterity);
    emoji.textContent = "🗡";
  }

  if ("yearsOfReign" in character) {
    new LiComponent(
      unstyled,
      " " + index,
      "Years of Reign: " + character.yearsOfReign
    );
    emoji.textContent = "👑";
  }

  if ("kissAssLevel" in character && "serves" in character) {
    new LiComponent(
      unstyled,
      " " + index,
      "Kiss Ass Level: " + character.kissAssLevel
    );
    new LiComponent(
      unstyled,
      " " + index,
      "Serves to: " + character.serves.characterData.name
    );
    emoji.textContent = "🛡";
  }

  new Comunications(
    body,
    "communications " + index,
    character.communicate(),
    character.characterData.imageSource,
    character.characterData.name + " " + character.characterData.family
  );
};
