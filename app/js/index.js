/* eslint-disable no-new */
import { characters } from "./characters/characters.js";
import { DivComponent } from "./components/DivComponent/DivComponent.js";
import { H2Component } from "./components/H2Component/H2Component.js";
import { IComponent } from "./components/IComponent/IComponent.js";
import { ImgComponent } from "./components/ImgComponent/ImgComponent.js";
import { LiComponent } from "./components/LiComponent/LiComponent.js";
import { UlComponent } from "./components/UlComponent/UlComponent.js";

const createCard = (character) => {
  const body = document.querySelector("body");

  new DivComponent(body, "app container");
  const appContainer = body.querySelector(".app.container");

  new UlComponent(appContainer, "characters-list row list-unstyled");
  const charactersList = appContainer.querySelector(
    ".characters-list.row.list-unstyled"
  );

  new LiComponent(charactersList, "character col");
  const column = charactersList.querySelector(".character.col");

  new DivComponent(column, "card character__card");
  const card = column.querySelector(".card.character__card");

  new ImgComponent(
    card,
    "character__picture card-img-top",
    character.characterData.imageSource
  );

  new DivComponent(card, "card-body");
  const cardBody = card.querySelector(".card-body");

  new IComponent(card, "emoji");

  new H2Component(
    cardBody,
    "character__name card-title h4",
    character.characterData.name + " " + character.characterData.family
  );

  new DivComponent(cardBody, "character__info");
  const characterInfo = cardBody.querySelector(".character__info");

  new DivComponent(cardBody, "character__overlay");
  const characterOverlay = cardBody.querySelector(".character__overlay");

  new UlComponent(characterInfo, "list-unstyled");
  const ageState = characterInfo.querySelector(".list-unstyled");

  new LiComponent(ageState, "", "Age: " + character.characterData.age + " yrs");

  new LiComponent(ageState, "stateLike", "State: ");
  const state = ageState.querySelector(".stateLike");

  new IComponent(state, "fas fa-thumbs-down");
  new IComponent(state, "fas fa-thumbs-up");

  new UlComponent(characterOverlay, "list-unstyled");
  const unstyled = characterOverlay.querySelector(".list-unstyled");

  new DivComponent(characterOverlay, "character__actions");

  if ("advises" in character) {
    new LiComponent(unstyled, "", "Advises to: " + character.advises);
  }

  if ("dexterity" in character && "weapon" in character) {
    new LiComponent(unstyled, "", "Weapon: " + character.weapon);
    new LiComponent(unstyled, "", "Dexterity: " + character.dexterity);
  }

  if ("yearsOfReign" in character) {
    new LiComponent(unstyled, "", "Years of Reign: " + character.yearsOfReign);
  }

  if ("kissAssLeve" in character && "serves" in character) {
    new LiComponent(unstyled, "", "Kiss Ass Level: " + character.kissAssLeve);
    new LiComponent(unstyled, "", "Serves to: " + character.serves);
  }
};

createCard(characters[1]);
