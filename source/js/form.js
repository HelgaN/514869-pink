"use strict";

var form = document.querySelector("form");
var modalSent = document.querySelector(".modal-sent");
var modalError = document.querySelector(".modal-error");
var buttonSent = document.querySelector(".modal__button--sent");
var buttonError = document.querySelector(".modal__button--error");

form.addEventListener("submit", function(evt) {
  if(evt) {
    evt.preventDefault();
    modalSent.classList.add("modal__open");
  } else {
    modalError.classList.add("modal__open");
  }
});

buttonSent.addEventListener("click", function() {
  modalSent.classList.add("modal__close");
});

buttonError.addEventListener("click", function() {
  modalError.classList.add("modal__close");
});
