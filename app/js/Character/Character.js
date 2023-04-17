export class Character {
  isAlive = true;
  series = "Game of Thrones";
  characterData;

  constructor(characterData) {
    this.characterData = characterData;
  }

  communicate() {
    return `${this.characterData.name} says: `;
  }

  die() {
    this.isAlive = false;
  }
}
