import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("NotFound 404");
  }

  async getHtml() {
    return `
      <h1>안녕 못찾아요</h1>
    `
  }
}