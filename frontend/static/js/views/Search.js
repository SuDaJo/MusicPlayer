import AbstractView from "./AbstractView.js";
import useFetch from "../API/API.js";

export default class Search extends AbstractView {
  constructor($target) {
    super($target);
    this.setTitle("MusicDrop｜Search");
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
    const searchDefaultImage = document.createElement("img");

    searchForm.classList.add("search-form");
    searchTitle.classList.add("sr-only");
    searchInputBar.classList.add("search-input-bar");
    searchListMain.classList.add("searchlist-main");

    searchDefaultImage.classList.add("search-default-image");
    searchDefaultImage.setAttribute("src", "/static/image/search-default.png");

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
    searchButtonImg.setAttribute("src", "/static/image/icon-search.svg");
    searchButtonImg.setAttribute("alt", "검색 버튼");
    searchButton.appendChild(searchButtonImg);

    const searchMainTitle = document.createElement("h3");
    searchMainTitle.textContent = "검색 결과";
    searchMainTitle.classList.add("sr-only");

    searchInputBar.append(searchInputTitle, searchInpLabel, searchInput, searchButton);
    searchListMain.append(searchMainTitle, searchDefaultImage);
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

    const $searchDefaultImage = document.querySelector(".search-default-image");
    let $inputValue = document.querySelector("#searchInpValue");

    if (!$inputValue.value) {
      alert("검색어를 입력해주세요");
    } else {
      const inputValue = $inputValue.value
      useFetch(`search?q=${inputValue}`)
        .then((response) => {
          const findMatches = (str) => {
            return str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
          }
        
          const highlightText = (data, keyword) => {
            const matchReg = new RegExp(`(${findMatches(keyword)})`, "gi");

            if (keyword !== "" && data.toLowerCase().includes(keyword.toLowerCase())) {
              let matchs = data.split(matchReg);
              let highlightData = matchs.map((match) => {
                if (match.toLowerCase() === keyword.toLowerCase()) {
                    return `<span class="highlight">${match}</span>`
                  } else {
                    return match
                  }
                }
              ).join("");
              return highlightData;
            }
            return data;
          }
          const $searchListMain = document.querySelector(".searchlist-main");

          if (response.total === 0) {
            const noResultImage = document.createElement("img");
            noResultImage.classList.add("search-no-result")
            noResultImage.setAttribute("src", "/static/image/search-no-result.png");
            noResultImage.setAttribute("alt", "검색 결과 없음");

            const searchMainTitle = document.createElement("h3");
            searchMainTitle.textContent = "검색 결과 없음";
            searchMainTitle.classList.add("sr-only");

            $searchListMain.replaceChildren(searchMainTitle, noResultImage);
          } else {
            const searchMainUl = document.createElement("ul");
            $searchListMain.replaceChildren(searchMainUl);

            const searchItem = response.data
              .map((item) => {
                return `
              <li class="playlist-item">
                <figure class="playlist-info">
                  <img src=${item.album.cover_small} alt="앨범 타이틀">
                  <figcaption class="playlist-item-info">
                    <span class="playlist-title">${highlightText(item.title, inputValue)}</span>
                    <span class="playlist-artist">${highlightText(item.artist.name, inputValue)}</span>
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
            searchMainUl.innerHTML = searchItem;
            return response;
          }
        })
        .then(() => {
          const $musicAddBtn = document.querySelectorAll(".music-add-btn");
          $musicAddBtn.forEach((button) => {
            button.addEventListener("click", (event) => {
              super.toast();

              let id = Number(event.currentTarget.dataset.id);
              let title = event.currentTarget.dataset.title;
              let coverImg = event.currentTarget.dataset.cover;
              let artist = event.currentTarget.dataset.artist;

              super.setLocalStorage(id, title, coverImg, artist);
            });
          });
        });

      $inputValue.value = "";

      if (!$searchDefaultImage) {
        return;
      } else {
        $searchDefaultImage.remove();
      }
    }
  }
}
