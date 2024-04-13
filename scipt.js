"use strict";
const imgs = document.querySelectorAll("img");
const getImg = function (url) {
  return new Promise((res, rej) => {
    res(url);
    rej(new Error("not fined img"));
  });
};

imgs.forEach((img) => {
  getImg(`./img${img.dataset.src}-asli.jpg`).then((imgA) => {
    img.src = imgA;
    img.addEventListener("load", function () {
      img.classList.remove("blur");
    });
  });
});
