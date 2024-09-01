const card = document.querySelector(".flip-card");
const flipCardButton = document.querySelector(".flip-card-trigger")

flipCardButton.addEventListener("click", function () {
  card.classList.toggle("show");
});