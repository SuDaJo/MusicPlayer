import AbstractView from "./AbstractView.js";
import useFetch from "../API/API.js";

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
    wrapper.classList.add("wrapper", "search-wrapper");
    this.$target.replaceChildren(wrapper);

    const searchWrapper = document.createElement("section");
    const searchTitle = document.createElement("h2");
    searchTitle.textContent = "검색 화면";
    const searchForm = document.createElement("form");
    const searchInputBar = document.createElement("fieldset");
    const searchListMain = document.createElement("section");

    searchForm.classList.add("search-form");
    searchTitle.classList.add("sr-only");
    searchInputBar.classList.add("search-input-bar");
    searchListMain.classList.add("searchlist-main");

    const searchInputTitle = document.createElement("legend");
    const searchInpLabel = document.createElement("label");
    const searchInput = document.createElement("input");
    searchInput.id = "searchInpValue";
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "검색");

    searchInputTitle.classList.add("sr-only");
    searchInputTitle.textContent = "검색";
    searchInpLabel.setAttribute("for", "searchInpValue");
    searchInpLabel.classList.add("sr-only");

    const searchButton = document.createElement("button");
    const searchButtonImg = document.createElement("img");

    searchButton.classList.add("search-button");
    searchButton.setAttribute("type", "button");
    searchButtonImg.setAttribute("src", "./static/image/icon-search.svg");
    searchButtonImg.setAttribute("alt", "검색 버튼");
    searchButton.appendChild(searchButtonImg);

    const searchMainTitle = document.createElement("h3");
    searchMainTitle.textContent = "검색 결과";
    searchMainTitle.classList.add("sr-only");

    const searchMainUl = document.createElement("ul");

    searchInputBar.append(searchInputTitle, searchInpLabel, searchInput, searchButton);
    searchListMain.append(searchMainTitle, searchMainUl);
    searchForm.append(searchInputBar);
    searchWrapper.append(searchTitle, searchForm, searchListMain);
    wrapper.appendChild(searchWrapper);

    this.getSearchData();
  }

  getSearchData() {
    const $searchForm = document.querySelector(".search-form");
    const $searchButton = document.querySelector(".search-button");

    $searchForm.addEventListener("submit", this.searchEventFunc);
    $searchButton.addEventListener("click", this.searchEventFunc);
  }

  searchEventFunc(event) {
    event.preventDefault();

    const $searchMainUl = document.querySelector("ul");
    let $inputValue = document.querySelector("#searchInpValue");

    useFetch(`search?q=${$inputValue.value}`)
      .then((response) => {
        const searchItem = response.data
          .map((item) => {
            return `
            <li class="playlist-item">
              <figure class="playlist-info">
                <img src=${item.album.cover_small} alt="앨범 타이틀">
                <figcaption class="playlist-item-info">
                  <span class="playlist-title">${item.title}</span>
                  <span class="playlist-artist">${item.artist.name}</span>
                </figcaption>
              </figure>
              <a href="playcontrol/${item.id}" class="chart-btn-play" type="button">
                <img src="/static/image/icon-play.svg" alt="재생버튼">
              </a>
              <button class="music-add-btn" type="button"
                data-id="${item.id}"
                data-title="${item.title}"
                data-artist="${item.artist.name}"
                data-cover="${item.album.cover_small}"
                >
                <img src="/static/image/icon-plus.svg" alt="추가버튼">
              </button>
              </button>
            </li>
        `;
          })
          .join("");
        $searchMainUl.innerHTML = searchItem;
        return response;
      }).then(() => {
        const $musicAddBtn = document.querySelectorAll(".music-add-btn");
        $musicAddBtn.forEach((button) => {
          button.addEventListener("click", (event) => {
            let id = Number(event.currentTarget.dataset.id);
            let title = event.currentTarget.dataset.title;
            let coverImg = event.currentTarget.dataset.cover;
            let artist = event.currentTarget.dataset.artist;

            super.setLocalStorage(id, title, coverImg, artist);
          })
        })
      });
    $inputValue.value = "";
  }
}
