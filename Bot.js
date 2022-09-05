let links = document.links;
let btnK = document.getElementsByName("btnK")[0];
let keywords = ["Взаимодействие PHP и MySQL", "10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress"];
let keyword = keywords[getRandom(0, keywords.length)];

let googleInput = document.getElementsByName("q")[0];


if (btnK !== undefined) {
    let i = 0;

    let timerId = setInterval(() => {
    googleInput.value += keyword[i];
    i++;
    if (i == keyword.length) {
    clearInterval(timerId);
    btnK.click();
}
}, 500);

} else {

  for (let i=0; i<links.length; i++) {
    if (links[i].href.indexOf("napli.ru") !== -1) {
      console.log("Нашел строку" + links[i]);
      let link = links[i];
      link.click();
      break;
    }
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random()*(max - min) + min);
}

