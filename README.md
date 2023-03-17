# <span id="top">🎵 Music Drop</span>

<!-- <img width="100%" src=""></img> -->

🔗 [**배포URL**](https://musicdropplay.netlify.app/)

<br/>

## 프로젝트 소개

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

[1. 프로젝트 소개](#프로젝트-소개)<br>
[2. 팀원 소개](#🙋‍♀️-팀원-소개)<br>
[3. 개발 환경](#⚙️-개발-환경)<br>
[4. 구현 기능](#🛠-구현-기능)<br>
[5. 프로젝트 구조](#🗂-프로젝트-구조)<br>
[6. 트러블 슈팅](#🙇‍♀️-트러블-슈팅)<br>
[7. 프로젝트 배포 후 느낀 점](#👩‍👧‍👧-프로젝트-배포-후-느낀-점)

<br/>

## 🙋‍♀️ 팀원 소개

|김다정|정수현|조민지|
|:-:|:-:|:-:|
|<img width="180" alt="DaJeong_profile_img" src="https://avatars.githubusercontent.com/u/93987174?v=4">|<img width="180" alt="SuHyun_profile_img" src="https://avatars.githubusercontent.com/u/68059880?v=4">|<img width="180" alt="MinJi_profile_img" src="https://avatars.githubusercontent.com/u/112460344?v=4">|
|[DADA6041](https://github.com/DADA6041)|[IntHyun](https://github.com/IntHyun)|[ming-Jo](https://github.com/ming-Jo)|

<p align="right"><a href="#top">⬆️Top</a></p>

## ⚙️ 개발 환경

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

## 🛠 구현 기능

---
|<center>Splash</center>|<center>Home</center>|<center>Chart</center>|
|---|---|---|
|<img src="https://user-images.githubusercontent.com/112460344/225514650-f75209ce-ca86-4985-92ff-45767ab7e5b4.gif"></img>|<img src="https://user-images.githubusercontent.com/112460344/225514312-5ec0c13a-4c66-4f39-a018-cf137b8ecdf4.gif"></img>|<img src="https://user-images.githubusercontent.com/112460344/225497096-f8908d18-32b1-4e62-866b-7bce8a34ad5e.gif"></img>

| <center>Playlist</center> | <center>Search</center> | <center>Control music</center> |
| --- | --- | --- |
|<img src="https://user-images.githubusercontent.com/112460344/225497961-cea0d5a4-6ddf-4a6e-bf9e-4ddb69cbdf7d.gif"></img>|<img src="https://user-images.githubusercontent.com/112460344/225498452-79fc8c7e-a620-4574-bb9d-db86dbcdd0b3.gif"></img>|<img src="https://user-images.githubusercontent.com/112460344/225499084-9852e87f-c5d2-4d59-87d8-93514f267977.gif"></img>|


<p align="right"><a href="#top">⬆️Top</a></p>

## 🗂 프로젝트 구조

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

## 🙇‍♀️ 트러블 슈팅 
#### 1. 
* 문제 : 
* 원인 : 
* 해결 : 

#### 2. 
* 문제 : 
* 원인 : 
* 해결 : 

#### 3. 
* 문제 : 
* 원인 : 
* 해결 : 


<p align="right"><a href="#top">⬆️Top</a></p>

<br/>

## 👩‍👧‍👧 프로젝트 배포 후 느낀 점 


### 🐼 김다정


### 💗 정수현


### 😎 조민지



<p align="right"><a href="#top">⬆️Top</a></p>