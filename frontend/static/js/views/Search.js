import AbstractView from "./AbstractView.js";

export default class Search extends AbstractView {
  constructor($target) {
    super($target);
    this.setTitle("서치");
  }

  async getHtml() {
    this.createHtml();
  }

  createHtml() {
    const wrapper = document.createElement("main");
    wrapper.classList.add("wrapper", "chart-wrapper");
    this.$target.appendChild(wrapper);
  }
}

// return `
// <main class="wrapper search-wrapper">
// <section>
//   <h2 class="sr-only">검색 화면</h2>
//   <fieldset class="search-input-bar">
//     <legend class="sr-only">검색</legend>
//     <label for="searchInpValue" class="sr-only"></label>
//     <input id="searchInpValue" type="text" placeholder="검색" />
//     <button class="search-btn" type="button">
//       <img src="./static/image/icon-search.svg" alt="검색 버튼" />
//     </button>
//   </fieldset>
//   <section class="searchlist-main">
//     <ul>
//       <li class="playlist-item">
//         <figure class="playlist-info">
//           <img src="./static/image/album-img.png" alt="앨범 타이틀">
//           <figcaption class="playlist-item-info">
//             <span class="playlist-title">19th Floor</span>
//             <span class="playlist-artist">Bobby Richards</span>
//           </figcaption>
//         </figure>
//         <button class="chart-btn-play" type="button"><img src="./static/image/icon-play.svg" alt="재생버튼"></button>
//         <button type="button"><img src="./static/image/icon-plus.svg" alt="추가버튼"></button>
//         </button>
//       </li>
//     </ul>
//   </section>
// </section>
// </main>
// `