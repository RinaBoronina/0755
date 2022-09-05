// ==UserScript==
// @name         GoogleBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot for Google
// @author       Karina Boronina
// @match        https://www.google.com/*
// @match        https://napli.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

let links = document.links;
let btnK = document.getElementsByName("btnK")[0];
let keywords = ["Взаимодействие PHP и MySQL", "10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress", "Плагины VS Сode"];
let keyword = keywords[getRandom(0, keywords.length)];
let googleInput = document.getElementsByName("q")[0];

//Нахождение на гл стр
if (btnK !== undefined) {
  let i = 0;

  let timerId = setInterval(()=> {
    googleInput.value += keyword[i];
    i++;
    if (i == keyword.length) {
      clearInterval(timerId);
      setTimeout(()=>{
        btnK.click();
      }, getRandom(1000, 2500));

    }
  },500);

//Нахожусь на целевом сайте
} else if (location.hostname == "napli.ru") {
  console.log("Мы на целевом сайте!");

  setInterval(()=>{
    let index = getRandom(0, links.length);

    if (getRandom(0, 101) > 70) {
      location.href = "https://www.google.com/";
    }

    if (links[index].href.indexOf("napli.ru") !== -1) {
      links[index].click();
    }

  }, getRandom(4000, 5000));


//нахождение на др стр  и поиск целевой стр
} else {
  let nextGooglePage = true;

  for (let i=0; i<links.length; i++) {
    if (links[i].href.indexOf("napli.ru") !== -1) {
      console.log("Нашел строку " + links[i]);
      let link = links[i];
      nextGooglePage = false;
      setTimeout(()=>{
        link.click();
      }, getRandom(3500,4500))
      break;
    }
  }

  if (document.querySelector(".YyVfkd").innerText == "4") {
    nextGooglePage = false;
    location.href = "https://www.google.com/";
  }

  if (nextGooglePage) {
  setTimeout(()=>{
    pnnext.click();
  }, getRandom(3000, 5000));

  }
}
function getRandom(min, max) {
  return Math.floor(Math.random()*(max - min) + min);
}

