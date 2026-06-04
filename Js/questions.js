(function () {
  const titleQuestions = [...document.querySelectorAll(".questions__title")];
  console.log(titleQuestions);

  titleQuestions.forEach(question => {
    question.addEventListener("click", () => {
      let height = 0; // Altura del box de las preguntas frecuentes
      let answer = question.nextElementSibling;
      let addPadding = question.parentElement.parentElement;  // Estoy llamando el elemento padre

      addPadding.classList.toggle('questions__padding--add');
      question.children[0].classList.toggle('questions__arrow--rotate');

      if (answer.clientHeight === 0) {
        height = answer.scrollHeight;
      }

      answer.style.height = `${height}px`;
    });
  });
})();
