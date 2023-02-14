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
    const contCategory = document.createElement("section");
    homeTitle.classList.add("sr-only");
    homeTitle.textContent = "홈 화면";
    advertise.textContent = "우리 광고";
    contCategory.classList.add("cont-category");

    const categoryTitle = document.createElement("h3");
    const contAlbum = document.createElement("div");
    categoryTitle.classList.add("tit-category");
    contAlbum.classList.add("cont-album");
    
    this.getArtistData();

    categoryTitle.textContent = "최신곡";
    contAlbum.innerHTML = `
      <a class="cont-album-link" href="/playcontrol">
        <img class="cover-album" src="/static/image/album-img.png" alt="앨범커버" />
      </a>
    `;

    contCategory.append(categoryTitle, contAlbum);
    homeWrapper.append(homeTitle, advertise, contCategory);
  }

  pickArtistData() {
    const koreanArtist = ["아이유", "BTS", "성시경", "뉴진스", "임영웅", "태연", "세븐틴", "블랙핑크"];
    const foreignArtist = ["Ariana Grande", "eminem", "Justin Bieber", "Charlie Puth", "Taylor Swift", "Rihanna", "Beyonce"];
    const femaleArtist = ["소녀시대", "마마무", "청하", "Lady Gaga", "Alicia Keys", "Kesha", "Kelly Clarkson", "Billie Eilish"]
    const maleArtist = ["싸이", "폴킴", "박재범", "케이윌", "Sam Smith", "Ed Sheeran", "Maroon5"];

    const artistListGroup = [koreanArtist, foreignArtist, femaleArtist, maleArtist]

    let artistRandomPick = [];

    artistListGroup.map((artistList) => {
      artistRandomPick.push(artistList[Math.floor(Math.random() * artistList.length)]);
    })

    return artistRandomPick
  }

  async getArtistData() {
    let randomArtistArr = this.pickArtistData();

    randomArtistArr.map((artist) => {
      useFetch(`search?q=${artist}`).then((data) => {
        console.log(data);
      });
    })
  }


}

// return `
//   <main class="wrapper">
//   <section class="home-wrapper">
//     <h2 class="sr-only">홈 화면</h2>
//     <aside>우리광고</aside>
//     <section class="cont-category">
//       <h3 class="tit-category">최신곡</h3>
//       <div class="cont-album">
//         <a class="cont-album-link" href="#">
//           <img class="cover-album" src="/static/image/album-img.png" alt="앨범커버" />
//         </a>
//       </div>
//     </section>

//     <section class="cont-category">
//       <h3 class="tit-category">오늘의 Best</h3>
//       <div class="cont-album">
//         <a class="cont-album-link" href="#">
//           <img class="cover-album" src="/static/image/album-img.png" alt="앨범커버" />
//         </a>
//       </div>
//     </section>

//     <section class="cont-category">
//       <h3 class="tit-category">오늘의 선곡(추천)</h3>
//       <div class="cont-album">
//         <a class="cont-album-link" href="#">
//           <img class="cover-album" src="/static/image/album-img.png" alt="앨범커버" />
//         </a>
//       </div>
//     </section>
//   </section>
// </main>
// `;
