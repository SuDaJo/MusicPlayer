import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("재생화면");
  }

  async getHtml() {
    return `
      <h1>안녕 재생화면</h1>
    `
  }
}