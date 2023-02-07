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
    this.$target.appendChild(wrapper);

    const playlistWrapper = document.createElement("section");
    const playlistTitle = document.createElement("h2");
    const playlistMain = document.createElement("div");
    const playListItemUl = document.createElement("ul");

    playlistTitle.classList.add("tit-playlist");
    playlistMain.classList.add("playlist-main");

    playlistTitle.textContent = "MY PLAYLIST";

    playListItemUl.innerHTML = `
      <li class="playlist-item">
        <figure class="playlist-info">
          <img src="./static/image/album-img.png" alt="앨범 타이틀">
          <figcaption class="playlist-item-info">
            <span class="playlist-title">19th Floor</span>
            <span class="playlist-artist">Bobby Richards</span>
          </figcaption>
        </figure>
        <button class="btn-delete" type="button">
          <img class="img-delete" src="./static/image/icon-trash.svg" alt="삭제버튼">
        </button>
      </li>
    `;

    playlistMain.append(playListItemUl);
    playlistWrapper.append(playlistTitle, playlistMain);
    wrapper.append(playlistWrapper);
  }
}

// return `
// <main class="wrapper playlist-wrapper">
// <section>
//   <h2 class="tit-playlist">MY PLAYLIST</h2>
//   <div class="playlist-main">
//     <ul>
//       <li class="playlist-item">
//         <figure class="playlist-info">
//           <img src="./static/image/album-img.png" alt="앨범 타이틀">
//           <figcaption class="playlist-item-info">
//             <span class="playlist-title">19th Floor</span>
//             <span class="playlist-artist">Bobby Richards</span>
//           </figcaption>
//         </figure>
//         <button class="btn-delete" type="button">
//           <img class="img-delete" src="./static/image/icon-trash.svg" alt="삭제버튼">
//         </button>
//       </li>
//     </ul>
//   </div>
// </section>
// </main>
// `
