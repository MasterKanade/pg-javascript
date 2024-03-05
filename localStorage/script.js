const userInput = document.getElementById("userInput");
const buttonEle = document.getElementById("userBtn");
const setText = document.getElementById("startHeader");

buttonEle.addEventListener("click", () => {
  const result = userInput.value;
  localStorage.setItem("userInput", result);
  const putText = localStorage.getItem("userInput");
  setText.innerText = putText;
});
