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

  if (!match) {
    match = {
      route: routes[routes.length - 1],
      isMatch: true,
    };
  }

  const $root = document.querySelector("#root");
  const viewHtml = new match.route.view($root, getParams(match));

  await viewHtml.getHtml();

  const $navBar = document.querySelector(".nav-bar");
  if (viewHtml.$target.baseURI.includes("playcontrol")) {
    $navBar.style.display = "none";
  } else {
    $navBar.style.display = "block";
  }

  // $root.innerHTML = await viewHtml.getHtml();

  const $playControl = document.querySelectorAll(".cont-album-link");
  $playControl.forEach((url) => {
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
    }, 1500);
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
