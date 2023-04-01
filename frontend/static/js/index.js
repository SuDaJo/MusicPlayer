import Home from "./views/Home.js";
import Chart from "./views/Chart.js";
import MyplayList from "./views/MyplayList.js";
import Search from "./views/Search.js";
import PlayControl from "./views/PlayControl.js";
import NotFound from "./views/NotFound.js";
import Splash from "./views/Splash.js";

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.isMatch.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );
  return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/chart", view: Chart },
    { path: "/myplaylist", view: MyplayList },
    { path: "/search", view: Search },
    { path: "/playcontrol/:id", view: PlayControl },
    { path: "/notfound", view: NotFound },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.isMatch !== null
  );

  const $root = document.querySelector("#root");

  if (!match) {
    match = {
      route: routes[routes.length - 1],
      isMatch: true,
    };
    const viewHtml = new NotFound($root);
    await viewHtml.getHtml();
  } else {
    const viewHtml = new match.route.view($root, getParams(match));
    await viewHtml.getHtml();
  }

  const $navBar = document.querySelector(".nav-bar");
  if (match.route.path.includes("playcontrol") || match.route.path.includes("notfound")) {
    $navBar.style.display = "none";
  } else {
    $navBar.style.display = "block";
  }

  let target;

  if (location.pathname === "/"){
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
      characterData: true // 데이터 변경전 내용 기록
    };

    observer.observe(target, config);
  }

  const $playListControl = document.querySelectorAll(".my-music-link");

  $playListControl.forEach((url) => {
    url.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(e.currentTarget.href);
    });
  });
};


window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  const $navBar = document.querySelector(".nav-bar");
  const $home = $navBar.querySelector("#goHome");
  const $chart = $navBar.querySelector("#goChart");
  const $playList = $navBar.querySelector("#goMyPlayList");
  const $search = $navBar.querySelector("#goSearch");

  const urlList = [$home, $chart, $playList, $search];

  urlList.forEach((url) => {
    url.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(e.currentTarget.href);
    });
  });

  if (location.pathname === "/") {
    const splash = new Splash();
    splash.getSplash();

    setTimeout(() => {
      const $splash = document.querySelector(".splash-wrapper");
      $splash.classList.add("fade-out");
      $navBar.classList.remove("hidden-navbar");
      setTimeout(() => {
        $splash.style.display = "none";
      }, 500);
    }, 1200);
  }

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

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (item !== currentActive) {
        currentActive.classList.remove("active");
        item.classList.add("active");
        currentActive = item;
      }
    });
  });

  router();
});
