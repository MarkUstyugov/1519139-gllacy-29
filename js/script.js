let feedbackButton = document.querySelector(".contacts__button");
let feedbackPopup = document.querySelector(".modal-feedback");
let feedbackClose = feedbackPopup.querySelector(".modal-feedback__close-button");
let feedbackName = feedbackPopup.querySelector(".modal-feedback__name");
let feedbackForm = feedbackPopup.querySelector(".modal-feedback__form");
let feedbackEmail = feedbackPopup.querySelector(".modal-feedback__email");
let feedbackText = feedbackPopup.querySelector(".modal-feedback__textarea");
let darkBackground = document.querySelector(".darkBackground");

let staticMap = document.querySelector(".contacts__map-wrapper");
let interactiveMap = document.querySelector(".contacts__interactive-map");

let subscriptionForm = document.querySelector(".subscription__form");
let subscriptionEmail = document.querySelector(".subscription__email");

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

subscriptionForm.addEventListener("submit", function(evt) {
  if (!subscriptionEmail.value){
    evt.preventDefault();
  }
})

staticMap.classList.add("contacts__map--off");
interactiveMap.classList.add("contacts__interactive-map--active");

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  darkBackground.classList.add("darkBackground--active");

  if (storage) {
    feedbackEmail.value = storage;
  }

  feedbackName.focus();
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  darkBackground.classList.remove("darkBackground--active");
  feedbackForm.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackEmail.value || !feedbackText.value || !feedbackName.value) {
    evt.preventDefault();
    feedbackForm.classList.remove("modal-error");
    feedbackForm.offsetWidth = feedbackForm.offsetWidth;
    feedbackForm.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", feedbackEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      darkBackground.classList.remove("darkBackground--active");
      feedbackForm.classList.remove("modal-error");
    }
  }
});


