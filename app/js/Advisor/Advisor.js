import { Character } from "../Character/Character.js";

export class Advisor extends Character {
  advises;

  constructor(characterData, advises) {
    super(characterData);

    if (advises instanceof Character) {
      this.advises = advises;
    }
  }

  communicate() {
    return `${super.communicate()}I have a funny feeling that I'm going to die`;
  }
}
