import AbstractView from "./AbstractView.js";
import useFetch from "../API/API.js";

export default class Chart extends AbstractView {
  constructor($target) {
    super($target);
    this.setTitle("차트");
  }

  async getHtml() {
    this.createHtml();
  }

  createHtml() {
    const wrapper = document.createElement("main");
    wrapper.classList.add("wrapper", "chart-wrapper");
    this.$target.replaceChildren(wrapper);

    const chartWrapper = document.createElement("section");
    const chartMain = document.createElement("section");
    const chartTitle = document.createElement("h2");
    const chartHeader = document.createElement("ul");
    chartTitle.classList.add("sr-only");
    chartHeader.classList.add("chart-header");
    chartTitle.textContent = "차트 화면";
    chartWrapper.append(chartTitle, chartHeader);
    wrapper.append(chartWrapper, chartMain);

    const chartHeaderItemList = [{ koreaTop: "국내 TOP 20" }, { popTop: "해외 TOP 20" }];

    chartHeaderItemList.forEach((listTitle) => {
      const chartHeaderItem = document.createElement("li");
      const chartHeaderItemLink = document.createElement("button");

      chartHeaderItem.appendChild(chartHeaderItemLink);
      chartHeaderItem.classList.add("chart-header-item");
      chartHeaderItemLink.textContent = Object.values(listTitle)[0];

      if (chartHeaderItemLink.textContent === "국내 TOP 20") {
        chartHeaderItem.classList.add("header-active");
      }

      chartHeader.appendChild(chartHeaderItem);
    });

    chartMain.classList.add("chart-main");
    const chartMainTitle = document.createElement("h3");
    const chartMainHeader = document.createElement("ol");
    chartMainTitle.classList.add("sr-only");
    chartMain.append(chartMainTitle, chartMainHeader);

    this.setTop20List();
  }

  setTop20List() {
    const $chartHeaderItemBtns = document.querySelectorAll(".chart-header-item button");
    let tempArtistData;

    $chartHeaderItemBtns.forEach((button) => {
      button.addEventListener("click", (event) => {
        let targetHeader = event.currentTarget.parentNode;
        if (event.target.textContent === "해외 TOP 20") {
          targetHeader.classList.add("header-active");
          targetHeader.previousSibling.classList.remove("header-active");
          tempArtistData = this.foreignArtist;
        } else {
          targetHeader.classList.add("header-active");
          targetHeader.nextSibling.classList.remove("header-active");
          tempArtistData = this.koreanArtist;
        }
        this.getTop20List(tempArtistData);
      });
    });
    this.getTop20List(tempArtistData);
  }

  getTop20List(item) {
    let chartTempData = [];

    if (!item) {
      item = this.koreanArtist;
    }

    item.map((artist, idx) => {
      useFetch(`search?q=${artist}`).then((res) => {
        chartTempData.push(...res.data);

        if (idx === item.length - 1) {
          this.createChart(chartTempData);
        }
      });
    });
  }

  createChart(musicData) {
    const chartMainHeader = document.querySelector(".chart-main ol");

    let sortMusicData = musicData.sort((a, b) => b.rank - a.rank).slice(0, 20);

    const top20Item = sortMusicData
      .map((list, idx) => {
        return `
        <li class="chart-list-item">
        ${
          idx + 1 <= 3 ? `<span class="chart-top-rank">${idx + 1}</span>` : `<span class="chart-rank">${idx + 1}</span>`
        }
          <figure class="chart-album-info">
            <img src=${list.album.cover_small} alt="앨범 타이틀">
            <figcaption class="chart-item-info">
              <span class="chart-item-title">${list.title}</span>
              <span class="chart-item-artist">${list.artist.name}</span>
            </figcaption>
          </figure>
          <a href="playcontrol/${list.id}" class="chart-btn-play" type="button">
            <img src="/static/image/icon-play.svg" alt="재생버튼">
          </a>
          <button type="button" class="music-add-btn"
            data-id="${list.id}"
            data-title="${list.title}"
            data-artist="${list.artist.name}"
            data-cover="${list.album.cover_small}"
          >
            <img src="/static/image/icon-plus.svg" alt="추가버튼">
          </button>
      </li>
      `;
      })
      .join("");
    chartMainHeader.innerHTML = top20Item;
    this.setLocalData(sortMusicData);
  }

  setLocalData() {
    const btn = document.querySelectorAll(".music-add-btn");
    btn.forEach((button) => {
      button.addEventListener("click", (event) => {
        let id = Number(event.currentTarget.dataset.id);
        let title = event.currentTarget.dataset.title;
        let coverImg = event.currentTarget.dataset.cover;
        let artist = event.currentTarget.dataset.artist;

        super.setLocalStorage(id, title, coverImg, artist);
      });
    });
  }
}
