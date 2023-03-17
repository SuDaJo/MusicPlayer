import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor($target) {
    super($target);
    this.setTitle("NotFound 404");
  }

  async getHtml() {
    this.createHtml();
  }

  createHtml() {
    const wrapper = document.createElement("main");
    const backBtn = document.createElement("button");
    const backBtnImg = document.createElement("img");
    const notFoundImgWrapper = document.createElement("div");
    backBtn.setAttribute("type", "button");
    backBtnImg.setAttribute("src", "/static/image/icon-arrow-left.svg");
    backBtnImg.setAttribute("alt", "뒤로가기");

    wrapper.classList.add("wrapper");
    wrapper.classList.add("not-found");
    backBtn.classList.add("back-button");
    notFoundImgWrapper.classList.add("not-found-wrapper");

    const notFoundImg = document.createElement("img");
    notFoundImg.setAttribute("src", "/static/image/NotFound.png");
    notFoundImg.setAttribute("alt", "페이지를 찾을 수 없습니다.");
    notFoundImg.classList.add("not-found-image");

    notFoundImgWrapper.append(notFoundImg);
    backBtn.appendChild(backBtnImg);
    wrapper.append(backBtn, notFoundImgWrapper);
    this.$target.append(wrapper);

    this.goBack();
  }

  goBack() {
    const backButton = document.querySelector(".back-button");
    if (backButton) {
      backButton.addEventListener("click", () => {
        history.back();
      });
    }
  }
}
