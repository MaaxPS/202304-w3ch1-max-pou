import { Component } from "../Component/Component.js";

export class H2Component extends Component {
  text;

  constructor(parentElement, className, text) {
    super(parentElement, className, "h2");

    this.text = text;

    this.render();
  }

  render() {
    this.element.textContent = this.text;
  }
}
