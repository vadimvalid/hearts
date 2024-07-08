(function () {
  const header = document.querySelector(".header");
  const burgerBtn = document.querySelector(".header__burger");

  burgerBtn.addEventListener("click", () => {
    header.classList.toggle("header--active");
  });
})();

(function () {
  const dialog = document.querySelector("dialog");
  const showButton = document.querySelector(".header > .container > .button");

  // "Show the dialog" button opens the dialog modally
  showButton.addEventListener("click", () => {
    dialog.showModal();
  });

  // Close the dialog when click outside
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
})();
