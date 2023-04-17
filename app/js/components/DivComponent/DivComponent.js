import { Component } from "../Component/Component.js";

export class DivComponent extends Component {
  text;

  constructor(parentElement, className, ...text) {
    super(parentElement, className, "div");

    this.text = text;

    this.render();
  }

  render() {
    this.element.textContent = this.text;
  }
}
