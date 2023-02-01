import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("홈");
  }

  async getHtml() {
    return `
      <h1>안녕 홈</h1>
    `
  }
}