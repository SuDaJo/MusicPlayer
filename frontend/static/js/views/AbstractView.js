export default class AbstractView {
  constructor($target) {
    this.$target = $target;
  }

  setTitle(title) {
    document.title = title;
  }

  async getHtml() {
    return "";
  }
}