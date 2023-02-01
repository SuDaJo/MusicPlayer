import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("플레이리스트");
  }

  async getHtml() {
    return `
      <h1>안녕 플레이리스트</h1>
    `
  }
}