# <span id="top">🎵 Music Drop</span>

<img width="100%" src="https://user-images.githubusercontent.com/112460344/226498134-692f3e4e-6dd1-4a40-aa1a-3a6fe358c989.png"></img>

🔗 [**배포URL**](https://musicdropplay.netlify.app/)

<br/>

## <span id="projectintro">프로젝트 소개</span>

### [ 개요 ]

- Music Drop은 음악을 들을 수 있는 웹 애플리케이션입니다.
- open API (deezer)를 활용하여 다양한 음악을 검색 및 추가 할 수 있고 30초 미리듣기를 제공합니다.
- 국내, 해외차트 순위를 확인할 수 있습니다.
- 나만의 플레이리스트를 만들어 원하는 음악을 들을 수 있습니다.
- 플레이리스트에 담긴 음악을 기반으로 랜덤 재생, 한곡 반복, 다음곡/이전곡 재생 기능을 사용할 수 있습니다.
- 모든 기능구현을 VSC live share를 활용하여 페어 프로그래밍으로 진행했습니다.

### [ 제작 기간 ]

2023.01.19 - 진행중

<p align="right"><a href="#top">⬆️Top</a></p>

## 📍 목차

[1. 프로젝트 소개](#projectintro)<br>
[2. 팀원 소개](#introduceteam)<br>
[3. 개발 환경](#development)<br>
[4. 구현 기능](#feature)<br>
[5. 프로젝트 구조](#structure)<br>
[6. 트러블 슈팅](#troubleshooting)<br>
[7. 프로젝트 진행 중 새로 알게 된 것들](#learn)<br>
[8. 프로젝트 배포 후 느낀 점](#deploy)

<br/>

## <span id="introduceteam">🙋‍♀️ 팀원 소개</span>

|                                                 김다정                                                 |                                                정수현                                                 |                                                조민지                                                 |
| :----------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: |
| <img width="180" alt="DaJeong_profile_img" src="https://avatars.githubusercontent.com/u/93987174?v=4"> | <img width="180" alt="SuHyun_profile_img" src="https://avatars.githubusercontent.com/u/68059880?v=4"> | <img width="180" alt="MinJi_profile_img" src="https://avatars.githubusercontent.com/u/112460344?v=4"> |
|                                [DADA6041](https://github.com/DADA6041)                                 |                                 [IntHyun](https://github.com/IntHyun)                                 |                                 [ming-Jo](https://github.com/ming-Jo)                                 |

<p align="right"><a href="#top">⬆️Top</a></p>

## <span id="development">⚙️ 개발 환경</span>

### [ 기술 스택 ]

- Front-End
  - <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
    <img src="https://img.shields.io/badge/Javascript-efd81d?style=for-the-badge&logo=Javascript&logoColor=white">
- Back-End
  - <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white">
  - <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
- Design
  - <a href="https://www.figma.com/file/UkbrdTahmsNb1cGlbkd9QE/MusicPlayer?node-id=0-1&t=bBXfnR0waJMhZf0p-0"><img src="https://img.shields.io/badge/Figma-a259ff?style=for-the-badge&logo=Figma&logoColor=white">🔗</a>

### [ 현상관리 및 협업 도구 ]

- <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=GitHub&logoColor=white">
  <img src="https://img.shields.io/badge/Git-e84d31?style=for-the-badge&logo=Git&logoColor=white">
  <img src="https://img.shields.io/badge/VScode-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white">
  <img src="https://img.shields.io/badge/Discord-535fee?style=for-the-badge&logo=Discord&logoColor=white">
- GitHub Issues : 활동 내역에 대해 이슈 등록 후 작업 진행
- VScode liveshare : 페어 프로그래밍으로 진행 및 코드 리뷰
- Discord : 실시간 소통 및 화면 공유

### [ 이슈 관리 ]

- 활동 내역에 대해 [이슈 등록](https://github.com/SuDaJo/MusicPlayer/issues) 후 작업 진행 <br>
  <img width="400px" alt="issues" src="https://user-images.githubusercontent.com/93987174/225491049-5f382228-dd08-470b-a15e-7efcca49e425.png">

- GitHub Project 사용 <br>
  <img width="400px" alt="Project" src="https://user-images.githubusercontent.com/93987174/225491505-dd2d9816-8c51-4783-9e40-ca5c3c3ff458.png">

- GitHub 코드리뷰 <br>
  <img width="400px" alt="review" src="https://user-images.githubusercontent.com/93987174/225490819-85a9f9db-f8e2-4839-ac00-14de23993b94.png">

### [ 커밋 컨벤션 ]

```bash
✨ Feat: 새로운 기능 추가
🏷️ MarkUp: 마크업
💄 Design : CSS, 사용자 UI 디자인 변경
📝 Docs : 문서 수정
🎨 Style : 코드포맷, 세미콜론, 개행, 코드 구조, 형태
🤔 Test : 테스트 코드
♻️ Refactor: 코드 리팩토링
🐛 Fix : 버그 및 오류 수정
🔥 Remove : 불필요한 파일 삭제
🔨 Chore : 빌드 업무, 패키지매니저, 폴더트리, 세팅 수정
💡 Comment : 필요한 주석 추가 및 변경

Co-authored-by: DADA6061 <d.ya96v@gmail.com>
Co-authored-by: ming-Jo <mwinterj@daum.net>
Co-authored-by: IntHyun <wjdtngus1237@naver.com>
```

<p align="right"><a href="#top">⬆️Top</a></p>

## <span id="feature">🛠 구현 기능</span>

---

| <center>Splash</center>                                                                                                 | <center>Home</center>                                                                                                   | <center>Chart</center>                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| <img src="https://user-images.githubusercontent.com/93987174/229665605-257c5462-3a88-49af-b653-52fca9434516.gif"></img> | <img src="https://user-images.githubusercontent.com/93987174/229665806-3ecf3614-4d0e-4336-a5bb-b98eebd818fc.gif"></img> | <img src="https://user-images.githubusercontent.com/93987174/229665270-068e21da-927a-44eb-8cec-b6f302580c76.gif"></img> |

| <center>Playlist</center>                                                                                               | <center>Search(기본)</center>                                                                                           | <center>Search(결과 없음)</center>                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| <img src="https://user-images.githubusercontent.com/93987174/229669151-6dbfb4d3-6428-4b8a-90e7-e7cb60da0e78.gif"></img> | <img src="https://user-images.githubusercontent.com/93987174/229666962-b8faa68c-c5fe-4c48-b7d5-f0277b578fa2.gif"></img> | <img src="https://user-images.githubusercontent.com/93987174/229667319-71386a20-810a-482e-9bc8-d1433537af74.gif"></img> |

| <center>Music Control</center>                                                                                          | <center>Not Found</center>                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| <img src="https://user-images.githubusercontent.com/93987174/229670406-eead9d66-50aa-460b-9082-a81d33dd7750.gif"></img> | <img src="https://user-images.githubusercontent.com/93987174/229667674-2a13c5bc-78e8-49ca-aed0-68b66894d248.gif"></img> |

<p align="right"><a href="#top">⬆️Top</a></p>

## <span id="structure">🗂 프로젝트 구조</span>

```markdown
📦frontend
┣ 📂static
┃ ┣ 📂css
┃ ┃ ┣ 📜chart.css
┃ ┃ ┣ 📜home.css
┃ ┃ ┣ 📜myplaylist.css
┃ ┃ ┣ 📜navbar.css
┃ ┃ ┣ 📜playcontrol.css
┃ ┃ ┣ 📜reset.css
┃ ┃ ┣ 📜search.css
┃ ┃ ┗ 📜style.css
┃ ┣ 📂image
┃ ┗ 📂js
┃ ┃ ┣ 📂API
┃ ┃ ┃ ┣ 📜API.js
┃ ┃ ┃ ┗ 📜apikey.js
┃ ┃ ┣ 📂json
┃ ┃ ┃ ┗ 📜memberData.json
┃ ┃ ┣ 📂views
┃ ┃ ┃ ┣ 📜AbstractView.js
┃ ┃ ┃ ┣ 📜Chart.js
┃ ┃ ┃ ┣ 📜Home.js
┃ ┃ ┃ ┣ 📜MyplayList.js
┃ ┃ ┃ ┣ 📜NotFound.js
┃ ┃ ┃ ┣ 📜PlayControl.js
┃ ┃ ┃ ┣ 📜Search.js
┃ ┃ ┃ ┗ 📜Splash.js
┃ ┃ ┗ 📜index.js
┣ 📜index.html
┗ 📜_redirects
```

<p align="right"><a href="#top">⬆️Top</a></p>

## <span id="troubleshooting">🙇‍♀️ 트러블 슈팅</span>

### 1. 다른 페이지로 이동할 때 마다 요소가 추가됨

- 문제 및 원인 : createElement로 요소를 생성하고 appendChild로 요소를 추가하고 있어서 메서드가 실행될 때 마다 요소가 생성, 추가됨
- 해결 :

  - (참고) 각 페이지에는 root 요소 안에 main 컨테이너 요소가 공통적으로 존재함
  - `1차 해결`

    - 클릭한 페이지의 main wrapper에 요소를 hidden하는 class를 추가

    - 라우팅 후 hidden된 요소가 DOM에 존재하지 않아 에러 발생

  - `2차 해결`

    - `removeElement()` 함수를 생성하여 페이지 이동 시 직전 페이지의 요소를 제거하는 로직 구현

    - 뒤로가기 버튼 클릭 시 제거되었던 요소가 다시 추가되는 현상 발생

  - `3차 해결(완료)`

    - 각 페이지의 main wrapper를 `appendChild`가 아닌 `replaceChildren`으로 페이지 이동 시 요소 대체

    - [replaceChildren MDN 설명 참고](https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren)

      ```javascript
      // 기존 appendChild
      const wrapper = document.createElement("main");
      wrapper.classList.add("wrapper");
      this.$target.appendChild(wrapper);

      // 수정 replaceChildren
      const wrapper = document.createElement("main");
      wrapper.classList.add("wrapper");
      this.$target.replaceChildren(wrapper);
      ```

### 2. 재생바 드래그 시 정상적으로 드래그 위치 못 잡는 현상

- 문제 및 원인 : 음악을 재생할 때 재생바를 드래그 하면 드래그한 위치를 정상적으로 표시하지 않음
- 해결 : input의 range는 `click`이 아니라 `input` event로 컨트롤 해야한다.

  ```javascript
  // click 이벤트로 했을 때 (드래그 위치 파악 X)
  $progressBar.addEventListener("click", (e) => {
    let progressInputValue = e.target.value;
    let songDuration = $audio.duration;
    $audio.currentTime = (progressInputValue * songDuration) / 100;
  });

  // input 이벤트로 했을 때 (드래그 위치 파악 O)
  $progressBar.addEventListener("input", (e) => {
    let progressInputValue = e.target.value;
    let songDuration = $audio.duration;
    $audio.currentTime = (progressInputValue * songDuration) / 100;
  });
  ```

### 3. 화살표 함수 내부에서 메서드 실행 안되는 현상

- 문제 및 원인 : 화살표 함수 내부에서 this가 지칭하는 대상이 달라서 부모 Class의 메서드가 작동하지 않음
- 해결 : `this.method()`가 아닌 `super.method()`로 부모 Class의 prototype-method를 참조하기

  ```javascript
    setLocalData() {
      const btn = document.querySelectorAll(".music-add-btn");
      btn.forEach((button) => {
        button.addEventListener("click", (event) => {
          super.toast();

          let id = Number(event.currentTarget.dataset.id);
          let title = event.currentTarget.dataset.title;
          let coverImg = event.currentTarget.dataset.cover;
          let artist = event.currentTarget.dataset.artist;

          // 기존에 작성했던 this는 상위 클래스의 setLocalStorage()를 찾지못함.
          // this.setLocalStorage(id, title, coverImg, artist);

          super.setLocalStorage(id, title, coverImg, artist);
        });
      });
    }
  ```

  ### 4. 비동기로 DOM 요소 생성 시 event 작동 안함

  - 문제 : anchor 태그의 새로고침을 방지하며 페이지를 이동하기 위해 anchor 태그에 접근하는 과정에서 anchor 태그를 찾지 못하는 문제 발생

  - 원인 : createElement로 모든 요소들을 생성하였는데 비동기 통신으로 인해 요소가 생성되기 전 DOM에 접근하여 해당 요소를 찾지 못함

  - 해결 : 비동기 통신 이후 변경된 DOM 데이터를 감지하기 위해 MutationObserver로 속성과 자식노드, 자손노드에 변경되는 요소가 있는지 감지한 뒤 해당 요소에 접근하여 event를 적용

  ```javascript
  let target;

  if (location.pathname === "/") {
    target = document.querySelector(".home-wrapper");
  } else if (location.pathname === "/search") {
    target = document.querySelector(".searchlist-main");
  } else if (location.pathname === "/chart") {
    target = document.querySelector(".chart-main");
  }

  if (target) {
    const callback = () => {
      const $playControl = target.querySelectorAll(".to-play-control");
      $playControl.forEach((url) => {
        url.addEventListener("click", (e) => {
          e.preventDefault();
          navigateTo(e.currentTarget.href);
        });
      });
    };

    const observer = new MutationObserver(callback);

    const config = {
      attributes: true, // 속성 변화 할때 감지
      childList: true, // 자식노드 추가/제거 감지
      subtree: true, // 손자노드까지 추가/제거 감지
      characterData: true, // 데이터 변경전 내용 기록
    };

    observer.observe(target, config);
  }
  ```

<p align="right"><a href="#top">⬆️Top</a></p>

<br/>

## <span id="learn">✏️ 프로젝트 진행 중 새로 알게 된 것들</span>

- Promise 객체를 생성하여 불러온 데이터를 렌더링 하기 전 로딩화면 띄우기

  ```javascript
  new Promise((resolve) => {
    const contCategory = data
      .map((list, idx) => {
        return `
          ... 페이지 요소 생성하는 코드 ...
          `;
      })
      .join("");

    resolve(/* 생성되고 난 뒤 넘겨줄 데이터 */);
  })
    .then((/* resolve에서 받은 데이터 */) => {
      // 데이터를 불러오고 난 뒤 실행할 코드
    })
    .catch((error) => {
      throw new Error(error);
    });
  ```

- scroll method 특정 위치로 스크롤 하기

  - [scrollBy MDN 설명 참고](https://developer.mozilla.org/ko/docs/Web/API/Window/scrollBy)
  - `scrollBy`는 `left`, `top`, `behavior` 프로퍼티를 가짐
  - `left`는 x축 / `top`은 y축 이동
  - `behavior`

    - auto(기본값) : 브라우저가 선택
    - smooth : 부드러운 스크롤 애니메이션
    - instant : 한 번의 점프로 즉시 실행

  - Home 화면 가로 스크롤 버튼 구현 시 사용

  ```javascript
  horizontalScroll() {
    const $leftBtns = document.querySelectorAll(".left-scroll-button");
    const $rightBtns = document.querySelectorAll(".right-scroll-button");

    $leftBtns.forEach((item) => {
      item.addEventListener("click", () => {
        const contAlbum = item.previousElementSibling;
        if (contAlbum.scrollLeft + contAlbum.offsetWidth >= contAlbum.scrollWidth) {

          contAlbum.scrollBy({ left: -290, top: 0, behavior: "smooth" });
        } else {
          contAlbum.scrollBy({ left: -260, top: 0, behavior: "smooth" });
        }
      });
    });

    $rightBtns.forEach((item) => {
      item.addEventListener("click", () => {
        const contAlbum = item.previousElementSibling.previousElementSibling;
        contAlbum.scrollBy({ left: 260, top: 0, behavior: "smooth" });
      });
    });
  }
  ```

- css filter 속성으로 asset 추가 없이 이미지 컬러 변경하기

  - 내비게이션 아이콘 active 효과 구현

  ```css
  .nav-list-item.active {
    filter: invert(63%) sepia(51%) saturate(3249%) hue-rotate(136deg) brightness(93%) contrast(97%);
  }
  ```

  ```javascript
  const menuItems = document.querySelectorAll(".nav-list-item");

  let currentActive;

  menuItems.forEach((item) => {
    const itemHref = item.querySelector("a").getAttribute("href");
    if (location.pathname === "/") {
      if (itemHref === "/") {
        currentActive = item;
        currentActive.classList.add("active");
      }
    } else if (location.pathname.includes(itemHref) && itemHref.length !== 1) {
      currentActive = item;
      currentActive.classList.add("active");
    }
  });
  ```

<p align="right"><a href="#top">⬆️Top</a></p>

<br/>

## <span id="deploy">👩‍👧‍👧 프로젝트 배포 후 느낀 점</span>

### 🐼 김다정

### 💗 정수현

### 😎 조민지

<p align="right"><a href="#top">⬆️Top</a></p>
