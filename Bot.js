// ==UserScript==
// @name         GoogleBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!Bot for Google
// @author       Boronina Karina
// @match        https://www.google.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


let links = document.links;
let btnK = document.getElementsByName('btnK')[0];
let keyWords = ["вывод произвольных полей wordpress", "10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress"];
let keyWord = keyWords[getRandom(0, keyWords.length)];


if (btnK !== undefined) {
    document.getElementsByName('q')[0].value = keyWord;
    btnK.click();
} else {
for( let i = 0; i <links.length; i++) {
    if (links[i].href.indexOf("napli.ru") !== -1) {
        console.log("Нашел строку!" + links[i]);
        let link = links[i];
        link.click();
        break;
    }
  }
 }
   function getRandom(min,max) {
    return Math.floor(Math.random()*(max - min) + min);
}
