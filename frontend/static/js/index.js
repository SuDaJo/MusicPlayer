import Home from "./views/Home.js";
import Chart from "./views/Chart.js";
import MyplayList from "./views/MyplayList.js";
import Search from "./views/Search.js";
import PlayControl from "./views/PlayControl.js";
import NotFound from "./views/NotFound.js";

const removeElement = () => {
  const $wrapper = document.querySelector(".wrapper");
  $wrapper.remove();
}

const navigateTo = (url) => {
  history.pushState(null, null, url);
  removeElement();
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/chart", view: Chart },
    { path: "/myplaylist", view: MyplayList },
    { path: "/search", view: Search },
    { path: "/playcontrol", view: PlayControl },
    { path: "/notfound", view: NotFound },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[routes.length - 1],
      isMatch: true,
    };
  }

  const $root = document.querySelector("#root");
  const viewHtml = new match.route.view($root);

  await viewHtml.getHtml();

  // $root.innerHTML = await viewHtml.getHtml();
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
      if (window.location.href !== e.currentTarget.href) {
        navigateTo(e.currentTarget.href);
      }
    });
  });

  router();
});
