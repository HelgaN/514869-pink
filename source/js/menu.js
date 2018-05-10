"use strict";

var mainNavOpenBlock = document.querySelector(".page-header");
var mainNavCloseBlock = document.querySelector(".main-navigation");
var buttonToggle = document.querySelector(".main-navigation__toggle");

mainNavOpenBlock.classList.remove("page-header--expand");
mainNavCloseBlock.classList.add("main-navigation--closed");

buttonToggle.addEventListener("click", function(evt) {
  if(mainNavCloseBlock.classList.contains("main-navigation--closed")) {
    mainNavCloseBlock.classList.remove("main-navigation--closed");
    mainNavOpenBlock.classList.add("page-header--expand");
  } else
  if(mainNavOpenBlock.classList.contains("page-header--expand")) {
    mainNavOpenBlock.classList.remove("page-header--expand");
    mainNavCloseBlock.classList.add("main-navigation--closed");
  }
})
