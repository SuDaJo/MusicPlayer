import AbstractView from "./AbstractView.js";
import useFetch from "../API/API.js";

export default class PlayControl extends AbstractView {
  constructor($target, params) {
    super($target, params);
    this.setTitle("재생화면");
  }

  async getHtml() {
    this.createHtml();
  }

  createHtml() {
    console.log(this.params.id);
    const wrapper = document.createElement("main");
    wrapper.classList.add("wrapper");
    this.$target.replaceChildren(wrapper);

    const playControlWrapper = document.createElement("section");
    playControlWrapper.classList.add("play-control-wrap");
    wrapper.appendChild(playControlWrapper);

    this.getTrackData();
  }

  goBack() {
    const backButton = document.querySelector(".back-button");
    if (backButton) {
      backButton.addEventListener("click", () => {
        history.back();
      });
    }
  }

  getTrackData() {
    console.log("hi");
    useFetch(`track/${this.params.id}`)
      .then((response) => {
        const $playControlWrapper = document.querySelector(".play-control-wrap");
        console.log(response);
        $playControlWrapper.innerHTML = `
        <h2 class="sr-only">재생 화면</h2>
        <button class="back-button">
          <img src="/static/image/icon-arrow-left.svg" alt="뒤로가기" />
        </button>
        <div class="play-control">
          <figure>
            <img
              class="album-title-img"
              src=${response.album.cover_big}
              alt="앨범 타이틀"
            />
            <figcaption class="play-control-info">
              <span class="music-title">${response.title}</span>
              <span class="music-artist">${response.artist.name}</span>
            </figcaption>
          </figure>
          <div class="controller">
            <div class="controller-btn-wrapper">
              <button type="button">
                <img src="/static/image/icon-repeat.svg" alt="랜덤 재생버튼" />
              </button>
              <div class="controller-btns-play">
                <button type="button">
                  <img
                    src="/static/image/icon-backward.svg"
                    alt="이전곡 재생버튼"
                  />
                </button>
                <button class="play-button" type="button" data-play="true">
                  <img class="play-pause-img" src="/static/image/icon-pause.svg" alt="일시정지버튼" />
                  <audio class="music-src">
                    <source src=${response.preview}>
                  </audio>
                </button>
                <button type="button">
                  <img
                    src="/static/image/icon-forward.svg"
                    alt="다음곡 재생버튼"
                  />
                </button>
              </div>
              <button type="button">
                <img
                  src="/static/image/icon-rotate-ccw.svg"
                  alt="한곡 반복 재생버튼"
                />
              </button>
            </div>
            <input type="range" class="progress-bar" />
            <div class="progress-bar-time">
              <span class="progress-time">1:43</span>
              <span>3:16</span>
            </div>
          </div>
        </div>
      `;
      })
      .then(() => {
        this.goBack();
        this.playMusic();
      });
  }

  playMusic() {
    const $playButton = document.querySelector(".play-button");
    const $audio = document.querySelector(".music-src");
    const $playPauseImg = document.querySelector(".play-pause-img");
    $audio.play();

    $playButton.addEventListener("click", () => {
      if ($playButton.dataset.play === "true") {
        $audio.pause();
        $playPauseImg.setAttribute("src", "/static/image/icon-play.svg");
        $playButton.dataset.play = "false";
      } else {
        $audio.play();
        $playPauseImg.setAttribute("src", "/static/image/icon-pause.svg");
        $playButton.dataset.play = "true";
      }
    });
  }
}

// return `

{
  /* <main class="wrapper">
  <section class="play-control-wrap">
  <h2 class="sr-only">재생 화면</h2>
    <button>
      <img src="/static/image/icon-arrow-left.svg" alt="뒤로가기" />
    </button>
    <div class="play-control">
      <figure>
        <img
          class="album-title-img"
          src="./static/image/album-title-img.png"
          alt="앨범 타이틀"
        />
        <figcaption class="play-control-info">
          // text slide 적용해야됨
          <span class="music-title">19th Floor</span>
          <span class="music-artist">Bobby Richards</span>
        </figcaption>
      </figure>
      <div class="controller">
        <div class="controller-btn-wrapper">
          <button type="button">
            <img src="./static/image/icon-repeat.svg" alt="랜덤 재생버튼" />
          </button>
          <div class="controller-btns-play">
            <button type="button">
              <img
                src="./static/image/icon-backward.svg"
                alt="이전곡 재생버튼"
              />
            </button>
            // 재생버튼 클릭하면 정지버튼으로 변경
            <button type="button">
              <img src="./static/image/icon-play.svg" alt="재생버튼" />
            </button>
            <button type="button">
              <img
                src="./static/image/icon-forward.svg"
                alt="다음곡 재생버튼"
              />
            </button>
          </div>
          <button type="button">
            <img
              src="./static/image/icon-rotate-ccw.svg"
              alt="한곡 반복 재생버튼"
            />
          </button>
        </div>
        <input type="range" class="progress-bar" />
        <div class="progress-bar-time">
          <span class="progress-time">1:43</span>
          <span>3:16</span>
        </div>
      </div>
    </div>
  </section>
</main> */
}
//     `;
