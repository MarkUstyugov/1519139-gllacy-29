let loginPopup = document.querySelector(".modal-login");
let loginForm = loginPopup.querySelector(".modal-login__form");
let loginLogin = loginForm.querySelector(".modal-login__login");
let loginPassword = loginForm.querySelector(".modal-login__password");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginPassword.value) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginLogin.value);
    }
  }
});

loginPopup.addEventListener("mouseout", function() {
  loginPopup.classList.remove("modal-error");
});