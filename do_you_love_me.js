const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Change the position of no button
noBtn.addEventListener("mouseover", () => {
  const newX =
    Math.random() * (questionContainer.offsetWidth - noBtn.offsetWidth);
  const newY =
    Math.random() * (questionContainer.offsetHeight - noBtn.offsetHeight);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Yes button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "flex";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "flex"; // Ensure visibility
    gifResult.play(); // Ensure the video plays
  }, 3000);
});
