export default class AbstractView {
  constructor($target) {
    this.$target = $target;
  }

  setTitle(title) {
    document.title = title;
  }

  // removeClass() {
  //   this.$target.classList.remove("domainHome", "domainChart", "domainMyPlayList", "domainSearch");
  // }

  async getHtml() {
    return "";
  }
}
