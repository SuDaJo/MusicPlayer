import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("차트");
  }

  async getHtml() {
    return `
      <h1>안녕 차트</h1>
    `
  }
}