import AbstractView from "./AbstractView.js";

export default class PlayControl extends AbstractView {
  constructor($target) {
    super($target);
    this.setTitle("재생화면");
  }

  async getHtml() {
    this.createHtml();
  }

  createHtml() {
    const wrapper = document.createElement("main");
    wrapper.classList.add("wrapper");
    this.$target.replaceChildren(wrapper);

    const playControlWrapper = document.createElement("section");
    playControlWrapper.classList.add("play-control-wrap");
    wrapper.appendChild(playControlWrapper);

    const playControlTitle = document.createElement("h2");
    const backButton = document.createElement("button");
    const playControl = document.createElement("div");
    const controller = document.createElement("div");
    playControlTitle.classList.add("sr-only");
    playControlTitle.textContent = "재생 화면";
    playControl.classList.add("play-control");
    controller.classList.add("controller");

    const backButtonImage = document.createElement("img");
    backButtonImage.setAttribute("src", "/static/image/icon-arrow-left.svg");
    backButtonImage.setAttribute("alt", "뒤로가기");
    backButton.appendChild(backButtonImage);

    const playControlFigure = document.createElement("figure");
    playControlFigure.innerHTML = `
      <img
        class="album-title-img"
        src="/static/image/album-title-img.png"
        alt="앨범 타이틀"
      />
      <figcaption class="play-control-info">
        <span class="music-title">19th Floor</span>
        <span class="music-artist">Bobby Richards</span>
      </figcaption>
    `;

    const controllerBtnWrapper = document.createElement("div");
    controllerBtnWrapper.classList.add("controller-btn-wrapper");

    const randomPlayButton = document.createElement("button");
    randomPlayButton.setAttribute("type", "button");
    const randomPlayButtonImage = document.createElement("img");
    randomPlayButtonImage.setAttribute("src", "/static/image/icon-repeat.svg");
    randomPlayButtonImage.setAttribute("alt", "랜덤 재생버튼");
    randomPlayButton.appendChild(randomPlayButtonImage);

    const controllerBtnsPlay = document.createElement("div");
    controllerBtnsPlay.classList.add("controller-btns-play");

    const prevPlayButton = document.createElement("button");
    prevPlayButton.setAttribute("type", "button");
    const prevPlayImage = document.createElement("img");
    prevPlayImage.setAttribute("src", "/static/image/icon-backward.svg");
    prevPlayImage.setAttribute("alt", "이전곡 재생버튼");
    prevPlayButton.appendChild(prevPlayImage);

    const playMusicButton = document.createElement("button");
    playMusicButton.setAttribute("type", "button");
    const playMusicButtonImage = document.createElement("img");
    playMusicButtonImage.setAttribute("src", "/static/image/icon-play.svg");
    playMusicButtonImage.setAttribute("alt", "재생버튼");
    playMusicButton.appendChild(playMusicButtonImage);

    const nextPlayButton = document.createElement("button");
    nextPlayButton.setAttribute("type", "button");
    const nextPlayButtonImage = document.createElement("img");
    nextPlayButtonImage.setAttribute("src", "/static/image/icon-forward.svg");
    nextPlayButtonImage.setAttribute("alt", "다음곡 재생버튼");
    nextPlayButton.appendChild(nextPlayButtonImage);

    const repeatPlayButton = document.createElement("button");
    repeatPlayButton.setAttribute("type", "button");
    const repeatPlayButtonImg = document.createElement("img");
    repeatPlayButtonImg.setAttribute("src", "/static/image/icon-rotate-ccw.svg");
    repeatPlayButtonImg.setAttribute("alt", "한곡 반복 재생버튼");
    repeatPlayButton.appendChild(repeatPlayButtonImg);

    const progressBar = document.createElement("input");
    progressBar.setAttribute("type", "range");
    progressBar.classList.add("progress-bar");
    const progressBarTime = document.createElement("div");
    progressBarTime.classList.add("progress-bar-time");
    progressBarTime.innerHTML =`
      <span class="progress-time">1:43</span>
      <span>3:16</span>
    `;

    controllerBtnsPlay.append(prevPlayButton, playMusicButton, nextPlayButton);
    controllerBtnWrapper.append(randomPlayButton, controllerBtnsPlay, repeatPlayButton);
    controller.append(controllerBtnWrapper, progressBar, progressBarTime);
    playControl.append(playControlFigure, controller);
    playControlWrapper.append(
      playControlTitle,
      backButton,
      playControl
    );
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
