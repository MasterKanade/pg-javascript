const userInput = document.getElementById("userInput");
const buttonEle = document.getElementById("userBtn");
const setText = document.getElementById("startHeader");

buttonEle.addEventListener("click", () => {
  const result = userInput.value;
  localStorage.setItem("userInput", result);
  location.reload(); // location is by default object and on click page will be reloaded.
});

window.addEventListener("load", () => {
  const putText = localStorage.getItem("userInput");
  setText.innerText = putText;
  setText.style.background = "lightslategrey";
  setText.style.color = "chartreuse";
});
