import { Component } from "../Component/Component.js";

export class IComponent extends Component {
  text;

  constructor(parentElement, className, ...text) {
    super(parentElement, className, "i");

    this.text = text;

    this.render();
  }

  render() {
    this.element.textContent = this.text;
  }
}
