var contactsButton = document.querySelector(".contacts__button");
var contactsPopup = document.querySelector(".modal-feedback");
var contactsClose = contactsPopup.querySelector(".modal-feedback__close-button");
var contactsName = contactsPopup.querySelector(".modal-feedback__name");
var contactsForm = contactsPopup.querySelector(".modal-feedback__form");
var darkBackground = document.querySelector(".darkBackground");

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
