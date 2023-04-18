import { Component } from "../Component/Component.js";

export class Comunications extends Component {
  pText;
  imgSrc;
  altImgText;

  constructor(parentElement, className, pText, imgSrc, altImgText) {
    super(parentElement, className, "div");

    this.imgSrc = imgSrc;
    this.altImgText = altImgText;
    this.pText = pText;
    this.render();
  }

  render() {
    this.element.innerHTML = `
    <p class="communications__text display-1">${this.pText}</p>
    <img class="communications__picture" src="${this.imgSrc}" alt="${this.altImgText}" />
    `;
  }
}
