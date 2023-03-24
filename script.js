"use strict";

const opBtn = document.querySelector(".operations--btn");
const chatboxContainer = document.querySelector(".chatbox__container");
const chatboxImg = document.querySelector(".chatbox--img");
const inputMessage = document.querySelector(".input");
console.log("input");

const currentTime = function (time) {
  const hours = `${time.getHours()}`.padStart(2, 0);
  const minutes = `${time.getMinutes()}`.padStart(2, 0);
  return `${hours < 12 ? "上" : "下"}午 ${hours}:${minutes}`;
};

const message = function (position, num, text) {
  const html = `<div class="chatbox chatbox--${position} chatbox--${num}">
  <div class="chatbox--text">
    ${text}
    </div>
    <div class="chatbox-time">${currentTime(new Date())}</div>
  </div>`;
  chatboxContainer.insertAdjacentHTML("beforeend", html);
};

const initMessage = function () {
  setTimeout(function () {
    message(
      "left",
      "_",
      "親愛的真寶寶 晚安(heart) 歡迎來到夜間豪華列車的餐車，我是這趟列車的車長，很高興能為您提供服務。在這個溫馨的環境中，您可以品嚐到最美味的料理，享受最豪華的設施。"
    );
  }, 5 * 1000);
  setTimeout(function () {
    message(
      "left",
      1,
      "以下有兩款雞湯，請問您欲選擇何款呢？ A.五告辣雞湯 看似辣油若隱若現， 在湯上飄啊飄、飄啊飄～實則啜飲入喉，麻辣從舌尖開始蔓延開來，一路燒至味蕾底端，不知是麻痺了還是無感。不過餘韻，實在是有夠舒爽舒爽～ B. 溫潤順口雞湯清澈透亮猶如琥珀般色澤，特地端到您眼前，不只給您好好端詳，更給您好好品嚐。 請選擇☺️"
    );
  }, 15 * 1000);
};
initMessage();

const messages = function () {
  if (inputMessage.value === "A" && document.querySelector(".chatbox--1")) {
    message("right", "_", inputMessage.value);
    setTimeout(function () {
      message("left", "_", `妳只能選B 嘻`);
    }, 3 * 1000);
    inputMessage.value = "";
  }

  if (inputMessage.value === "B" && document.querySelector(".chatbox--1")) {
    message("right", "_", inputMessage.value);
    setTimeout(function () {
      message(
        "left",
        "_",
        "來這是客人您所點 為您送上B. 溫潤順口雞湯 網路上有人這樣說道：「只有經過地獄般的痛， 才能鍛造天使般的愛。」 一路走來辛苦您了！誠摯祝福您！ 好的，希望您會喜歡。提醒您 若不合您的口味，也無法更換。 因為一切都是選擇。"
      );
    }, 3 * 1000);
    inputMessage.value = "";

    document.querySelector(".chatbox--1").classList.remove("chatbox--1");
    inputMessage.value = "";

    setTimeout(function () {
      message(
        "left",
        "2",
        "（這時您的耳邊傳來了熟悉的音樂，好像是入坑追星之路聽到的第一首歌...）"
      );
    }, 10 * 1000);
  }

  if (
    inputMessage.value.toUpperCase() === "SNOW MAN" &&
    document.querySelector(".chatbox--2")
  ) {
    message("right", "_", inputMessage.value);
    setTimeout(function () {
      message(
        "left",
        "_",
        `
    <a href="https://www.youtube.com/watch?v=l3UGVb7xzus&ab_channel=%E3%82%B8%E3%83%A3%E3%83%8B%E3%83%BC%E3%82%BAJr.%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB" target="blank">🎶🎶🎶🎶🎶背景音樂請下🎶🎶🎶🎶🎶</a>
    `
      );
    }, 3 * 1000);

    document.querySelector(".chatbox--2").classList.remove("chatbox--2");
    inputMessage.value = "";

    setTimeout(function () {
      message(
        "left",
        "3",
        "（聽著音樂，望向車窗外的星空，真美，來數數有幾顆星星呢...？）"
      );
    }, 10 * 1000);
  }

  if (
    Number(inputMessage.value) === 74 &&
    document.querySelector(".chatbox--3")
  ) {
    message("right", "_", inputMessage.value);
    setTimeout(function () {
      message("left", "_", "（天上的74顆星星好像連成了某種形狀...）");
    }, 3 * 1000);

    document.querySelector(".chatbox--3").classList.remove("chatbox--3");
    inputMessage.value = "";

    setTimeout(function () {
      message(
        "left",
        "4",
        `
        **            **
**  **        **  **
**      **    **      **
**         ****         **
**           **           **
**            *            **
**                             **
**                           **
**                       **
 **                   **
   **               **
     **           **
       **       **
         **   **
           **`
      );
    }, 10 * 1000);
  }
};

opBtn.addEventListener("click", function () {
  messages();
});
