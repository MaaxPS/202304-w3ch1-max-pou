import { Component } from "../Component/Component.js";

export class LiComponent extends Component {
  text;

  constructor(parentElement, className, ...text) {
    super(parentElement, className, "li");

    this.text = text;

    this.render();
  }

  render() {
    this.element.textContent = this.text;
  }
}
