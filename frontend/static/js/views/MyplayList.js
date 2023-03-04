import AbstractView from "./AbstractView.js";

export default class MyplayList extends AbstractView {
  constructor($target) {
    super($target);
    this.setTitle("MusicDrop｜PlayList");
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
    if (data) {
      let playListLi = data
        .map((item) => {
          return `
          <li id=${item.id} class="playlist-item">
            <a href="/playcontrol/${item.id}">
              <figure class="playlist-info">
              <img src=${item.coverImg} alt="앨범 타이틀">
                <figcaption class="playlist-item-info">
                  <span class="playlist-title">${item.title}</span>
                  <span class="playlist-artist">${item.artist}</span>
                </figcaption>
              </figure>
            </a>
            <button class="btn-delete" type="button">
              <img class="img-delete" src="./static/image/icon-trash.svg" alt="삭제버튼">
            </button>
          </li>
        `;
        })
        .join("");
        $playListUl.innerHTML += playListLi;
    }
    return ; 
  }

  removeList() {
    const $btnDelete = document.querySelectorAll(".btn-delete");
    $btnDelete.forEach((button) => {
      button.addEventListener("click", (event) => {
        let musicList = Array.from(JSON.parse(localStorage.getItem("data")));

        musicList.forEach((item) => {
          if (item.id === parseInt(event.currentTarget.parentNode.id)) {
            musicList.splice(musicList.indexOf(item), 1);
          }
        });
        localStorage.setItem("data", JSON.stringify(musicList));
        event.currentTarget.parentElement.remove();
      });
    });
  }
}
