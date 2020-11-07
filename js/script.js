let contactsButton = document.querySelector(".contacts__button");
let contactsPopup = document.querySelector(".modal-feedback");
let contactsClose = contactsPopup.querySelector(".modal-feedback__close-button");
let contactsName = contactsPopup.querySelector(".modal-feedback__name");
let contactsForm = contactsPopup.querySelector(".modal-feedback__form");
let darkBackground = document.querySelector(".darkBackground");
let staticMap = document.querySelector(".contacts__map");
let interactiveMap = document.querySelector(".contacts__interactive-map");

staticMap.classList.add("contacts__map--off");
interactiveMap.classList.add("contacts__interactive-map--active");


contactsButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  contactsPopup.classList.add("modal-show");
  darkBackground.classList.add("darkBackground--active");
  contactsName.focus();
});

contactsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.remove("modal-show");
  darkBackground.classList.remove("darkBackground--active");
});

contactsForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactsPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactsPopup.classList.remove("modal-show");
      darkBackground.classList.remove("darkBackground--active");
    }
  }
});

