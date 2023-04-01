import AbstractView from "./AbstractView.js";
import useFetch from "../API/API.js";

export default class PlayControl extends AbstractView {
  constructor($target, params) {
    super($target, params);
    this.setTitle("MusicDrop｜Play");
  }

  async getHtml() {
    this.createHtml();
  }

  createHtml() {
    const wrapper = document.createElement("main");
    wrapper.classList.add("wrapper");
    wrapper.classList.add("playcontrol-wrapper");
    this.$target.replaceChildren(wrapper);

    const playControlWrapper = document.createElement("section");
    playControlWrapper.classList.add("play-control-wrap");
    playControlWrapper.append(this.createLoading());
    wrapper.appendChild(playControlWrapper);

    this.getTrackData(this.params.id);
  }

  goBack() {
    const backButton = document.querySelector(".back-button");
    if (backButton) {
      backButton.addEventListener("click", () => {
        history.back();
      });
    }
  }

  getTrackData(params) {
    useFetch(`track/${params}`)
      .then((response) => {
        let id = response.id;
        let title = response.title;
        let coverImg = response.album.cover_small;
        let artist = response.artist.name;

        super.setLocalStorage(id, title, coverImg, artist);

        if (!localStorage.getItem("volume")) {
          localStorage.setItem("volume", 0.05)
        } else {
          localStorage.getItem("volume")
        }

        const $playControlWrapper = document.querySelector(".play-control-wrap");

        $playControlWrapper.innerHTML = `
        <h2 class="sr-only">재생 화면</h2>
        <button type="button" class="back-button">
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
            <div class="progress-bar-time">
              <span class="progress-time">00 : 00</span>
              <span class="duration-time">00 : 00</span>
            </div>
            <div class="progress-input-wrap">
              <input type="range" class="progress-bar" value="0" step="any" />
              <div class="progress-input-effect"></div>
            </div>
            <div class="controller-btn-wrapper">
              <button class="random-button" type="button">
                <img src="/static/image/icon-random.svg" alt="랜덤 재생버튼" />
              </button>
              <div class="controller-btns-play">
                <button class="prev-play-btn" type="button">
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
                <button class="next-play-btn" type="button">
                  <img
                    src="/static/image/icon-forward.svg"
                    alt="다음곡 재생버튼"
                  />
                </button>
              </div>
              <button class="repeat-button" type="button">
                <img
                  src="/static/image/icon-repeat.svg"
                  alt="한곡 반복 재생버튼"
                />
              </button>
            </div>
            </div>
            <div class="volume-control-wrapper">
              <img src="/static/image/icon-mute.svg">
              <input type="range" class="volume-control" value=${localStorage.getItem("volume") * 1000} />
              <img src="/static/image/icon-speaker.svg">
            </div>
        </div>
      `;
      })
      .then(() => {
        this.goBack();
        this.playMusic();
        this.slideText();
      });
  }

  playMusic() {
    const $playButton = document.querySelector(".play-button");
    const $playPauseImg = document.querySelector(".play-pause-img");
    const $audio = document.querySelector(".music-src");
    const $prevBtn = document.querySelector(".prev-play-btn");
    const $nextBtn = document.querySelector(".next-play-btn");
    const $volumeControl = document.querySelector(".volume-control");

    $audio.play();

    if (!localStorage.getItem("volume")) {
      $audio.volume = 0.05;
    } else {
      $audio.volume = localStorage.getItem("volume");
    }

    $playButton.addEventListener("click", (e) => {
      e.preventDefault();
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

    $audio.addEventListener("ended", (e) => {
      e.preventDefault();
      $playPauseImg.setAttribute("src", "/static/image/icon-play.svg");
      $playButton.dataset.play = "false";

      if (!localStorage.getItem("repeat")) {
        this.changeMusic(+1);
      } else {
        this.changeMusic(0);
      }
    });

    $nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.changeMusic(+1);
    });

    $prevBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.changeMusic(-1);
    });

    $volumeControl.addEventListener("input", (e) => {
      $audio.volume = e.target.value / 1000;
      localStorage.setItem("volume", e.target.value / 1000)
    });

    this.timeUpdate();
    this.moveProgressBar();
    this.randomPlayMusic();
    this.repeatMusic();
  }

  randomPlayMusic() {
    const $randomBtn = document.querySelector(".random-button");
    let musicList = Array.from(JSON.parse(localStorage.getItem("data")));

    if (!localStorage.getItem("random")) {
      $randomBtn.classList.remove("active");
    } else {
      $randomBtn.classList.add("active");
    }

    $randomBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (!localStorage.getItem("random")) {
        $randomBtn.classList.add("active");
        localStorage.setItem("random", true);
        let sortRandomData = musicList.sort(() => Math.random() - 0.5);
        localStorage.setItem("randomData", JSON.stringify(sortRandomData));
      } else {
        $randomBtn.classList.remove("active");
        localStorage.removeItem("random");
        localStorage.removeItem("randomData");
      }
    });
  }

  changeMusic(isNext) {
    let currentId;
    currentId = Number(this.params.id);

    let musicList;

    if (localStorage.getItem("random") === "true") {
      musicList = Array.from(JSON.parse(localStorage.getItem("randomData")));
    } else {
      musicList = Array.from(JSON.parse(localStorage.getItem("data")));
    }

    musicList.forEach((item, idx) => {
      if (item.id === currentId) {
        if (musicList[musicList.length - 1].id === currentId && isNext === +1) {
          this.getTrackData(musicList[0].id);
          this.params.id = musicList[0].id;
        } else if (musicList[0].id === currentId && isNext === -1) {
          this.getTrackData(musicList[musicList.length - 1].id);
          this.params.id = musicList[musicList.length - 1].id;
        } else {
          this.getTrackData(musicList[idx + isNext].id);
          this.params.id = musicList[idx + isNext].id;
        }
      }
    });
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

      $durationTime.textContent = `00 : ${parseInt(duration)}`;
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

  repeatMusic() {
    const $repeatBtn = document.querySelector(".repeat-button");

    if (!localStorage.getItem("repeat")) {
      $repeatBtn.classList.remove("active");
    } else {
      $repeatBtn.classList.add("active");
    }

    $repeatBtn.addEventListener("click", () => {
      if (!localStorage.getItem("repeat")) {
        $repeatBtn.classList.add("active");
        localStorage.setItem("repeat", true);
      } else {
        $repeatBtn.classList.remove("active");
        localStorage.removeItem("repeat");
      }
    });
  }

  slideText() {
    const $musicTitle = document.querySelector(".music-title");

    let elementWidth = $musicTitle.offsetWidth;
    let parentWidth = $musicTitle.parentNode.offsetWidth;
    let location = 0;
    
    if (elementWidth > parentWidth) {
      $musicTitle.style.alignSelf = "flex-start";
      $musicTitle.innerHTML += "&emsp; &emsp; &emsp;" + $musicTitle.textContent;
    }
    setTimeout(() => {
      function slideContent() {
        if (elementWidth > parentWidth) {
          $musicTitle.style.marginLeft = --location + "px";
    
          if (elementWidth + 50 === -location) {
            location = 0;
          }
        }
        requestAnimationFrame(slideContent);
      }
      slideContent();
    }, 1500);
  }
}