import AbstractView from "./AbstractView.js";
import useFetch from "../API/API.js";

export default class Home extends AbstractView {
  constructor($target) {
    super($target);
    this.setTitle("홈");
  }

  async getHtml() {
    this.createHtml();
  }

  createHtml() {
    const wrapper = document.createElement("main");
    wrapper.classList.add("wrapper");
    this.$target.replaceChildren(wrapper);

    const homeWrapper = document.createElement("section");
    homeWrapper.classList.add("home-wrapper");
    wrapper.appendChild(homeWrapper);

    const homeTitle = document.createElement("h2");
    const advertise = document.createElement("aside");
    homeTitle.classList.add("sr-only");
    homeTitle.textContent = "홈 화면";
    advertise.textContent = "우리 광고";

    homeWrapper.append(homeTitle, advertise);

    this.getArtistData();
  }

  pickArtistData() {
    const koreanArtist = ["아이유", "BTS", "성시경", "뉴진스", "임영웅", "태연", "세븐틴", "블랙핑크"];
    const foreignArtist = [
      "Ariana Grande",
      "eminem",
      "Justin Bieber",
      "Charlie Puth",
      "Taylor Swift",
      "Rihanna",
      "Beyonce",
    ];
    const femaleArtist = [
      "소녀시대",
      "마마무",
      "청하",
      "Lady Gaga",
      "Alicia Keys",
      "Kesha",
      "Kelly Clarkson",
      "Billie Eilish",
    ];
    const maleArtist = ["싸이", "폴킴", "박재범", "케이윌", "Sam Smith", "Ed Sheeran", "Maroon5"];

    const artistListGroup = [koreanArtist, foreignArtist, femaleArtist, maleArtist];

    let artistRandomPick = [];

    artistListGroup.map((artistList) => {
      artistRandomPick.push(artistList[Math.floor(Math.random() * artistList.length)]);
    });

    return artistRandomPick;
  }

  getArtistData() {
    let randomArtistArr = this.pickArtistData();

    let tempData = [];
    randomArtistArr.map((artist) => {
      useFetch(`search?q=${artist}`).then((res) => {
        tempData.push(res.data);
        if (tempData.length === 4) {
          this.repeatCreate(tempData);
        }
      });
    });
  }

  repeatCreate(musicData) {
    let data = musicData;

    const category = ["이 노래 어때요?", "나만 알고 싶은 노래", "20대 취향저격", "오늘의 인기 가수"];
    const $homeWrapper = document.querySelector(".home-wrapper");

    const contCategory = data
      .map((list, idx) => {
        return `
      <section class="cont-category">
        <h3 class="tit-category">${category[idx]}</h3>
        <div class="cont-album">
          ${list
            .map((item) => {
              return `
                <a class="cont-album-link" href="/playcontrol/${item.id}">
                  <img class="cover-album" src=${item.album.cover_medium} alt="앨범커버" />
                  <p class="album-title">${item.title}</p>
                  <p>${item.artist.name}</p>
                </a>
            `;
            })
            .join("")}
        </div>
      </section>
      `;
      })
      .join("");

    $homeWrapper.innerHTML += contCategory;
  }

}
