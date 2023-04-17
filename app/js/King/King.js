import { Character } from "../Character/Character.js";

export class King extends Character {
  yearsOfReign;

  constructor(characterData, yearsOfReign) {
    super(characterData);
    this.yearsOfReign = yearsOfReign;
  }

  communicate() {
    return `${super.communicate()}Everybody will die`;
  }
}
