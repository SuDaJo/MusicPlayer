import AbstractView from "./AbstractView.js";
import useFetch from "../API/API.js";

export default class Home extends AbstractView {
  constructor($target) {
    super($target);
    this.setTitle("MusicDrop｜Home");
  }

  async getHtml() {
    this.createHtml();
  }

  async createMemberData() {
    const response = await fetch("/static/js/json/memberData.json");
    console.log(response);
    if (response.ok) {
      const memberData = await response.json();
      return memberData;
    } else {
      console.log("실패!!" + response.status);
    }
  }

  async createHtml() {
    const wrapper = document.createElement("main");
    wrapper.classList.add("wrapper");
    this.$target.replaceChildren(wrapper);

    const homeWrapper = document.createElement("section");
    homeWrapper.classList.add("home-wrapper");
    wrapper.appendChild(homeWrapper);

    const homeTitle = document.createElement("h2");
    const advertise = document.createElement("aside");
    const advertiseUl = document.createElement("ul");

    advertise.appendChild(advertiseUl);

    homeTitle.classList.add("sr-only");
    homeTitle.textContent = "홈 화면";

    const memberData = await this.createMemberData();

    const memberList = memberData
      .map((data) => {
        return `
        <li class="member-info">
          <img class="member-profile-img" src=${data.img} alt="프로필 사진" />
          <div>
            <strong class="member-name">${data.name}</strong>
            <a class="member-github" href=${data.github}>GitHub</a>
            <a class="member-resume" href=${data.resume}>Resume</a>
          </div>
        </li>
        `;
      })
      .join("");
    advertiseUl.innerHTML += memberList;

    homeWrapper.append(homeTitle, advertise);

    this.getArtistData();
  }

  pickArtistData() {
    const artistListGroup = [this.koreanArtist, this.foreignArtist, this.femaleArtist, this.maleArtist];

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
