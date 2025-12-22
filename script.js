const card = document.querySelector(".card");
const heart = document.querySelector(".ri-heart-fill");

card.addEventListener("dblclick", () => {
  heart.classList.add("active");
  heart.classList.remove("gone");

  clearTimeout(heart.timer);

  heart.timer = setTimeout(() => {
    heart.classList.remove("active");
    heart.classList.add("gone");
  }, 800);

  setTimeout(() => {
    heart.classList.remove("gone");
  }, 1300);
});
