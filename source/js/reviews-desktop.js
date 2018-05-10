"use strict";

var rev1 = document.querySelector(".reviews__item-1");
var rev2 = document.querySelector(".reviews__item-2");
var rev3 = document.querySelector(".reviews__item-3");

var buttonNext1 = document.querySelector(".reviews__item-button--next-1");
var buttonPrev1 = document.querySelector(".reviews__item-button--prev-1");

var buttonNext2 = document.querySelector(".reviews__item-button--next-2");
var buttonPrev2 = document.querySelector(".reviews__item-button--prev-2");

var buttonNext3 = document.querySelector(".reviews__item-button--next-3");
var buttonPrev3 = document.querySelector(".reviews__item-button--prev-3");

var input1 = document.querySelector("#review-1");
var input2 = document.querySelector("#review-2");
var input3 = document.querySelector("#review-3");

buttonNext1.addEventListener("click", function() {
  input2.checked =true;
});

buttonPrev1.addEventListener("click", function() {
  input3.checked =true;
});

buttonNext2.addEventListener("click", function() {
  input3.checked =true;
});

buttonPrev2.addEventListener("click", function() {
  input1.checked =true;
});

buttonNext3.addEventListener("click", function() {
  input1.checked =true;
});

buttonPrev3.addEventListener("click", function() {
  input2.checked =true;
});
