const open = document.querySelector(".fa-align-justify");
const show = document.querySelector(".head");
const icon = document.querySelector(".icons");

open.addEventListener("click", function () {
  show.classList.toggle("hidden");
});

const countDownDate = new Date("Mar 6, 2022 15:37:25").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "MINT IS LIVE!";
  }
}, 1000);
const max = document.querySelector(".max");
const add = document.querySelector(".add");
const subs = document.querySelector(".subs");
const texts = document.querySelector(".text");
let plus = 0;

add.addEventListener("click", function () {
  if (plus < 10) plus = plus + 1;
  texts.innerHTML = plus;
});
max.addEventListener("click", function () {
  plus = 10;
  texts.innerHTML = plus;
});

subs.addEventListener("click", function () {
  if (plus > 0) plus = plus - 1;
  texts.innerHTML = plus;
});

const add1 = document.querySelector(".add1");
const subs1 = document.querySelector(".subs1");
const texts1 = document.querySelector(".text1");

let plus1 = 0;
add1.addEventListener("click", function () {
  if (plus1 < 10) plus1 = plus1 + 1;
  texts1.innerHTML = plus1;
});
subs1.addEventListener("click", function () {
  if (plus1 > 0) plus1 = plus1 - 1;
  texts1.innerHTML = plus1;
});

const add2 = document.querySelector(".add2");
const subs2 = document.querySelector(".subs2");
const texts2 = document.querySelector(".text2");
let plus2 = 0;
add2.addEventListener("click", function () {
  if (plus2 < 10) plus2 = plus2 + 1;
  texts2.innerHTML = plus2;
});
subs2.addEventListener("click", function () {
  if (plus2 > 0) plus2 = plus2 - 1;
  texts2.innerHTML = plus2;
});

const add3 = document.querySelector(".add3");
const subs3 = document.querySelector(".subs3");
const texts3 = document.querySelector(".text3");
let plus3 = 0;
add3.addEventListener("click", function () {
  if (plus3 < 10) plus3 = plus3 + 1;
  texts3.innerHTML = plus3;
});
subs3.addEventListener("click", function () {
  if (plus3 > 0) plus3 = plus3 - 1;
  texts3.innerHTML = plus3;
});

const add4 = document.querySelector(".add4");
const subs4 = document.querySelector(".subs4");
const texts4 = document.querySelector(".text4");
let plus4 = 0;
add4.addEventListener("click", function () {
  if (plus4 < 10) plus4 = plus4 + 1;
  texts4.innerHTML = plus4;
});
subs4.addEventListener("click", function () {
  if (plus4 > 0) plus4 = plus4 - 1;
  texts4.innerHTML = plus4;
});

const max1 = document.querySelector(".max1");
const max2 = document.querySelector(".max2");
const max3 = document.querySelector(".max3");
const max4 = document.querySelector(".max4");

max1.addEventListener("click", function () {
  plus1 = 10;
  texts1.innerHTML = plus1;
});
max2.addEventListener("click", function () {
  texts2.innerHTML = "10";
  plus2 = 10;
  texts2.innerHTML = plus2;
});
max3.addEventListener("click", function () {
  plus3 = 10;
  texts3.innerHTML = plus3;
});
max4.addEventListener("click", function () {
  plus4 = 10;
  texts4.innerHTML = plus4;
});
const h1 = document.querySelector(".load");
const sleep = document.querySelector(".fa-moon");
document.body.style.backgroundColor = "white";
// h1.style.color = "white";
document.querySelector(".hone").style.color = "black";
const supply = document.querySelectorAll(".s");
console.log(supply);
const val = document.querySelectorAll(".t");

sleep.addEventListener("click", function () {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "black";
    h1.style.color = "white";
    document.getElementById("demo").style.color = "white";
    document.querySelector(".hone").style.color = "white";
    document.querySelector(".hon").style.color = "white";
    supply.forEach(function (sup) {
      sup.style.color = "white";
    });
    val.forEach(function (t) {
      t.style.color = "white";
    });
  } else {
    document.body.style.backgroundColor = "white";
    h1.style.color = "black";
    document.getElementById("demo").style.color = "black";
    document.querySelector(".hone").style.color = "black";
    document.querySelector(".hon").style.color = "black";
    supply.forEach(function (sup) {
      sup.style.color = "black";
    });
    val.forEach(function (t) {
      t.style.color = "black";
    });
  }
});
