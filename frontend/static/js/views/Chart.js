import AbstractView from "./AbstractView.js";

export default class Chart extends AbstractView {
  constructor($target) {
    super($target);
    this.setTitle("차트");
  }

  async getHtml() {
    this.createHtml();
  }

  createHtml() {
    const wrapper = document.createElement("main");
    wrapper.classList.add("wrapper", "chart-wrapper");
    this.$target.replaceChildren(wrapper);

    const chartWrapper = document.createElement("section");
    const chartMain = document.createElement("section");
    const chartTitle = document.createElement("h2");
    const chartHeader = document.createElement("ul");
    chartTitle.classList.add("sr-only");
    chartHeader.classList.add("chart-header");
    chartTitle.textContent = "차트 화면";
    chartWrapper.append(chartTitle, chartHeader);
    wrapper.append(chartWrapper, chartMain);

    const chartHeaderItemList = [{ top20: "TOP 20" }, { genre1: "장르1" }, { genre2: "장르2" }];

    chartHeaderItemList.forEach((listTitle) => {
      const chartHeaderItem = document.createElement("li");
      const chartHeaderItemLink = document.createElement("a");
      chartHeaderItemLink.setAttribute("href", `/chart/${Object.keys(listTitle)[0]}`);
      chartHeaderItem.appendChild(chartHeaderItemLink);
      chartHeaderItem.classList.add("chart-header-item");
      chartHeaderItemLink.textContent = Object.values(listTitle)[0];
      console.log(Object.values(listTitle)[0]);
      chartHeader.appendChild(chartHeaderItem);
    });

    chartMain.classList.add("chart-main");
    const chartMainTitle = document.createElement("h3");
    const chartMainHeader = document.createElement("ol");
    chartMainTitle.classList.add("sr-only");
    chartMain.append(chartMainTitle, chartMainHeader);

    this.getItemList();
  }

  getItemList() {
    const chartHeaderItem = document.querySelector(".chart-header-item");
    const chartMainHeader = document.querySelector(".chart-main ol");

    chartHeaderItem.classList.toggle("header-active");
    chartMainHeader.innerHTML = `
    <li class="chart-list-item">
      <span class="chart-top-rank">1</span>
      <figure class="chart-album-info">
        <img src="./static/image/album-img.png" alt="앨범 타이틀">
        <figcaption class="chart-item-info">
          <span class="chart-item-title">19th Floor</span>
          <span class="chart-item-artist">Bobby Richards</span>
        </figcaption>
      </figure>
      <button class="chart-btn-play" type="button"><img src="./static/image/icon-play.svg" alt="재생버튼"></button>
      <button type="button"><img src="./static/image/icon-plus.svg" alt="추가버튼"></button>
    </li>
  `;
  }
}

// return `
//     <main class="wrapper chart-wrapper">
//     <section>
//       <h2 class="sr-only">차트화면</h2>
//       <ul class="chart-header">
//         <li class="chart-header-item header-active"><a href="#">TOP 20</a></li>
//         <li class="chart-header-item"><a href="#">장르 미정</a></li>
//         <li class="chart-header-item"><a href="#">장르 미정</a></li>
//       </ul>
//     </section>

//     <section class="chart-main">
//       <h3 class="sr-only">TOP 20</h3>
//       <ol>
//         <li class="chart-list-item">
//           <span class="chart-top-rank">1</span>
//           <figure class="chart-album-info">
//             <img src="./static/image/album-img.png" alt="앨범 타이틀">
//             <figcaption class="chart-item-info">
//               <span class="chart-item-title">19th Floor</span>
//               <span class="chart-item-artist">Bobby Richards</span>
//             </figcaption>
//           </figure>
//           <button class="chart-btn-play" type="button"><img src="./static/image/icon-play.svg" alt="재생버튼"></button>
//           <button type="button"><img src="./static/image/icon-plus.svg" alt="추가버튼"></button>
//         </li>
//         <li class="chart-list-item">
//           <span class="chart-top-rank">2</span>
//           <figure class="chart-album-info">
//             <img src="./static/image/album-img.png" alt="앨범 타이틀">
//             <figcaption class="chart-item-info">
//               <span class="chart-item-title">Sunny Travel</span>
//               <span class="chart-item-artist">Nico Staf</span>
//             </figcaption>
//           </figure>
//           <button class="chart-btn-play" type="button"><img src="./static/image/icon-play.svg" alt="재생버튼"></button>
//           <button type="button"><img src="./static/image/icon-plus.svg" alt="추가버튼"></button>
//         </li>
//         <li class="chart-list-item">
//           <span class="chart-top-rank">3</span>
//           <figure class="chart-album-info">
//             <img src="./static/image/album-img.png" alt="앨범 타이틀">
//             <figcaption class="chart-item-info">
//               <span class="chart-item-title">Where We Wanna Go</span>
//               <span class="chart-item-artist">Partrick Patrikias</span>
//             </figcaption>
//           </figure>
//           <button class="chart-btn-play" type="button"><img src="./static/image/icon-play.svg" alt="재생버튼"></button>
//           <button type="button"><img src="./static/image/icon-plus.svg" alt="추가버튼"></button>
//         </li>
//         <li class="chart-list-item">
//           <span class="chart-rank">4</span>
//           <figure class="chart-album-info">
//             <img src="./static/image/album-img.png" alt="앨범 타이틀">
//             <figcaption class="chart-item-info">
//               <span class="chart-item-title">All the Fixings</span>
//               <span class="chart-item-artist">Zachariah HickMan</span>
//             </figcaption>
//           </figure>
//           <button class="chart-btn-play" type="button"><img src="./static/image/icon-play.svg" alt="재생버튼"></button>
//           <button type="button"><img src="./static/image/icon-plus.svg" alt="추가버튼"></button>
//         </li>
//       </ol>
//     </section>
//   </main>
//     `
