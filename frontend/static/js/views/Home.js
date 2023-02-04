import AbstractView from "./AbstractView.js";

export default class Home extends AbstractView {
  constructor($target) {
    super($target);
    this.setTitle("홈");
  }

  async getHtml() {
    this.createHtml();
    // this.removeClass();
    // this.$target.classList.add("domainHome");
    // const $wrapper = document.querySelector(".wrapper");

    // if (!$wrapper && this.$target.classList.contains("domainHome")) {
    //   this.createHtml();
    // } else if ($wrapper && !this.$target.classList.contains("domainHome")) {
    //   $wrapper.remove();
    // }
  }

  createHtml() {
    const wrapper = document.createElement("main");
    wrapper.classList.add("wrapper");
    this.$target.appendChild(wrapper);

    const homeWrapper = document.createElement("section");
    homeWrapper.classList.add("home-wrapper");
    wrapper.appendChild(homeWrapper);

    const homeTitle = document.createElement("h2");
    const advertise = document.createElement("aside");
    const contCategory = document.createElement("section");
    homeTitle.classList.add("sr-only");
    homeTitle.textContent = "홈 화면";
    advertise.textContent = "우리 광고";
    // advertise.classList.add("");
    contCategory.classList.add("cont-category");
    homeWrapper.append(homeTitle, advertise, contCategory);
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
