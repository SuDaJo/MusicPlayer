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

  setLocalStorage(id, title, coverImg, artist) {
    localStorage.setItem(
      "data",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("data") || "[]"),
        {
          id: id,
          title : title,
          coverImg: coverImg,
          artist: artist,
        },
      ])
    );

    // 중복 제거하는 로직
    if (localStorage.getItem("data") != null) {
      let musicList = JSON.parse(localStorage.getItem("data"));

      const newSetArray = [...new Set(musicList.map(JSON.stringify))].map(JSON.parse);
      localStorage.setItem("data", JSON.stringify(newSetArray));
    }
  }
}
