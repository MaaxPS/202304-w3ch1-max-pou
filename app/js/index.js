/* eslint-disable no-new */
import { characters } from "./characters/characters.js";
import { addAppContainer } from "./functions/addAppContainer/addAppContainer.js";
import { createCard } from "./functions/createCard/createCard.js";

addAppContainer();

const letters = ["a", "b", "c", "d", "e"];

characters.forEach((character, index) => {
  createCard(character, letters[index]);
});
