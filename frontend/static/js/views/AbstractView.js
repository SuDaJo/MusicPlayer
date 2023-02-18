export default class AbstractView {
  constructor($target, params) {
    this.$target = $target;
    this.params = params;
  }

  setTitle(title) {
    document.title = title;
  }

  async getHtml() {
    return "";
  }
}
