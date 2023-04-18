import { Component } from "../Component/Component.js";

export class ButtonComponent extends Component {
  text;

  constructor(parentElement, className, text) {
    super(parentElement, className, "button");

    this.text = text;

    this.render();
  }

  render() {
    this.element.textContent = this.text;
  }
}
