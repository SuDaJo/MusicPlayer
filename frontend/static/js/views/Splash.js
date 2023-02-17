export default class Splash {
  getSplash() {
    const $body = document.querySelector("body");
    const wrapper = document.createElement("main");
    wrapper.classList.add("wrapper", "splash-wrapper");
    
    $body.prepend(wrapper);

    const logoWrapper = document.createElement("h1");
    logoWrapper.classList.add("logo-wrapper");

    const logoImg = document.createElement("img");
    logoImg.classList.add("logo");
    logoImg.setAttribute("src", "/static/image/logo-title.png");
    logoImg.setAttribute("alt", "로고");

    logoWrapper.append(logoImg);
    wrapper.append(logoWrapper);
  }
}