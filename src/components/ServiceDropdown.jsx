const toggleButton = document.getElementById("toggleButton");
const textSection = document.getElementById("textSection");

toggleButton.addEventListener("click", function() {
  if (textSection.classList.contains("hidden")) {
    textSection.classList.remove("hidden");
  } else {
    textSection.classList.add("hidden");
  }
});