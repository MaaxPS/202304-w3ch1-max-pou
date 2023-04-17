import { Component } from "../Component/Component.js";

export class ImgComponent extends Component {
  source;

  constructor(parentElement, className, source) {
    super(parentElement, className, "img");

    this.source = source;
    this.render();
  }

  render() {
    this.element.setAttribute("src", this.source);
  }
}
