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
        const $playControlWrapper =
          document.querySelector(".play-control-wrap");
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
            <input type="range" class="progress-bar" value="0" step="any" />
            <div class="progress-bar-time">
              <span class="progress-time">00 : 00</span>
              <span class="duration-time">00 : 00</span>
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
    const $playPauseImg = document.querySelector(".play-pause-img");
    const $audio = document.querySelector(".music-src");

    $audio.play();
    $audio.volume = 0.05;

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

    this.timeUpdate();
    this.moveProgressBar();
    this.endAudio();
  }

  timeUpdate() {
    const $audio = document.querySelector(".music-src");
    const $progressBar = document.querySelector(".progress-bar");
    const $progressTime = document.querySelector(".progress-time");
    const $durationTime = document.querySelector(".duration-time");

    $audio.addEventListener("timeupdate", (e) => {
      let currentTime = e.target.currentTime; // 현재 시간
      const duration = e.target.duration;
      let progressWidth = (currentTime / duration) * 100;
      $progressBar.value = progressWidth;

      $durationTime.textContent = `00 : ${parseInt(duration)}`
      let setCurrentTime = parseInt(currentTime).toString();
      if (setCurrentTime.length < 2) {
        $progressTime.textContent = `00 : 0${setCurrentTime}`;
      } else {
        $progressTime.textContent = `00 : ${setCurrentTime}`;
      }
    });
  }

  moveProgressBar() {
    const $progressBar = document.querySelector(".progress-bar");
    const $audio = document.querySelector(".music-src");

    $progressBar.addEventListener("input", (e) => {
      let progressInputValue = e.target.value;
      let songDuration = $audio.duration;
      $audio.currentTime = (progressInputValue * songDuration) / 100;
    });
  }

  endAudio() {
    const $audio = document.querySelector(".music-src");
    const $playButton = document.querySelector(".play-button");
    const $playPauseImg = document.querySelector(".play-pause-img");

    $audio.addEventListener("ended", () => {
      $playPauseImg.setAttribute("src", "/static/image/icon-play.svg");
      $playButton.dataset.play = "false";
    });
  }
}
