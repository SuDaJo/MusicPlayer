export default class AbstractView {
  constructor($target, params) {
    this.$target = $target;
    this.params = params;
    this.koreanArtist = ["아이유", "BTS", "성시경", "뉴진스", "임영웅", "태연", "세븐틴", "블랙핑크"];
    this.foreignArtist = ["Ariana Grande", "eminem", "Justin Bieber", "Charlie Puth", "Taylor Swift", "Rihanna", "Beyonce"];
    this.femaleArtist = ["소녀시대", "마마무", "청하", "Lady Gaga", "Alicia Keys", "Kesha", "Kelly Clarkson", "Billie Eilish"];
    this.maleArtist = ["싸이", "폴킴", "박재범", "케이윌", "Sam Smith", "Ed Sheeran", "Maroon5"];
  }

  setTitle(title) {
    document.title = title;
  }

  async getHtml() {
    return "";
  }

  createLoading() {
    const loadingGif = document.createElement("div");
    loadingGif.classList.add("loading");

    return loadingGif;
  }

  setLocalStorage(id, title, coverImg, artist) {
    localStorage.setItem(
      "data",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("data") || "[]"),
        {
          id: id,
          title: title,
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

  toast() {
    const $toast = document.querySelector("#toastUi");
    let removeToast;

    $toast.classList.contains("reveal")
      ? (clearTimeout(removeToast),
        (removeToast = setTimeout(function () {
          $toast.classList.remove("reveal");
        }, 1500)))
      : (removeToast = setTimeout(function () {
          $toast.classList.remove("reveal");
        }, 1500));
    $toast.classList.add("reveal");
  }
}
