export class Component {
  element;

  constructor(parentElement, className, tagName) {
    this.element = document.createElement(tagName);
    parentElement.appendChild(this.element);
    this.element.className = className;
  }
}
