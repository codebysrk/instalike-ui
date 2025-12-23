const card = document.querySelector(".card-img");
const followBtn = document.querySelector(".btn-follow");
const icon = followBtn.querySelector("i");
const followText = followBtn.querySelector(".follow-text");
const heart = document.querySelector(".ri-heart-fill");

followBtn.addEventListener("click", () => {
  const isFollowing = followBtn.classList.toggle("active");

  if (isFollowing) {
    icon.classList.replace("ri-add-line", "ri-user-follow-line");
    followText.textContent = "Remove";
  } else {
    icon.classList.replace("ri-user-follow-line", "ri-add-line");
    followText.textContent = "Add";
  }
});

card.addEventListener("dblclick", () => {
  heart.classList.remove("gone");
  heart.classList.add("active");

  clearTimeout(heart.timer);

  heart.timer = setTimeout(() => {
    heart.classList.remove("active");
    heart.classList.add("gone");
  }, 800);
});
