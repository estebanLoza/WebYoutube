//Hago otra función autoinvocada.
//Para protejer las variables y no se mezclen
//con otros archivos.

(function () {
  const openButton = document.querySelector(".nav__menu");
  const menu = document.querySelector(".nav__link");
  const closeMenu = document.querySelector(".nav__close");

  //Para poder abrir el menu que tengo
  openButton.addEventListener("click", () => {
    menu.classList.add("nav__link--show");
  });

  closeMenu.addEventListener("click", () => {
    menu.classList.remove("nav__link--show");
  });

  //
})();
