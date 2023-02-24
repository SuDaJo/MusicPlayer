import AbstractView from "./AbstractView.js";

export default class MyplayList extends AbstractView {
  constructor($target) {
    super($target);
    this.setTitle("플레이리스트");
  }

  async getHtml() {
    this.createHtml();
  }

  createHtml() {
    const wrapper = document.createElement("main");
    wrapper.classList.add("wrapper", "playlist-wrapper");
    this.$target.replaceChildren(wrapper);

    const playlistWrapper = document.createElement("section");
    const playlistTitle = document.createElement("h2");
    const playlistMain = document.createElement("div");
    const playListItemUl = document.createElement("ul");

    playListItemUl.classList.add("playlist-ul");
    playlistTitle.classList.add("tit-playlist");
    playlistMain.classList.add("playlist-main");

    playlistTitle.textContent = "MY PLAYLIST";

    playlistMain.append(playListItemUl);
    playlistWrapper.append(playlistTitle, playlistMain);
    wrapper.append(playlistWrapper);

    this.createPlayList();
    this.removeList();
  }

  createPlayList() {
    const data = JSON.parse(localStorage.getItem("data"));
    const $playListUl = document.querySelector(".playlist-ul");

    let playListLi = data
      .map((item) => {
        return `
        <li id=${item.data} class="playlist-item">
          <figure class="playlist-info">
          <img src=${item.coverImg} alt="앨범 타이틀">
            <figcaption class="playlist-item-info">
              <span class="playlist-title">${item.title}</span>
              <span class="playlist-artist">${item.artist}</span>
            </figcaption>
          </figure>
          <button class="btn-delete" type="button">
            <img class="img-delete" src="./static/image/icon-trash.svg" alt="삭제버튼">
          </button>
        </li>
      `;
      })
      .join("");
    $playListUl.innerHTML += playListLi;
  }

  removeList() {
    const $btnDelete = document.querySelectorAll(".btn-delete");
    $btnDelete.forEach((button) => {
      button.addEventListener("click", (event) => {
        let musicList = Array.from(JSON.parse(localStorage.getItem("data")));

        musicList.forEach((item) => {
          if (item.data === parseInt(event.currentTarget.parentNode.id)) {
            musicList.splice(musicList.indexOf(item), 1);
          }
        });
        localStorage.setItem("data", JSON.stringify(musicList));
        event.currentTarget.parentElement.remove();
      });
    });
  }
}
