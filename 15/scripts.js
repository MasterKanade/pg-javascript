const createBtn = document.getElementById("ele_creator");
const divContainer = document.getElementById("my-container");

let count = 0;
let behaviour = (event) => {
  count++;
  createBtn.innerHTML = `<b>${count}</b>`;
};
//createBtn.addEventListener("click", behaviour);

createBtn.addEventListener("click", () => {
  const el = document.createElement("button");
  divContainer.appendChild(el);
  el.innerHTML = count;
  el.classList.add("changeColor");
  count++;
});
