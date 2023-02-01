import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("서치");
  }

  async getHtml() {
    return `
      <h1>안녕 서치</h1>
    `
  }
}