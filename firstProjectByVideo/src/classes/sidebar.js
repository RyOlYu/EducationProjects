export class Sidebar {
  constructor(selector) {
    this.el = document.querySelector(selector);
    this.el.insertAdjacentHTML('beforeend', '<h1>Sidebar</h1>');
  }
}