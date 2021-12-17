const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

let itemHeightValue = 0;

item.addEventListener("dragstart", dragStart);
item.addEventListener("dragend", dragEnd);

placeholders.forEach((placeholder) => {
  placeholder.addEventListener("dragover", dragOver);
  placeholder.addEventListener("dragenter", dragEnter);
  placeholder.addEventListener("dragleave", dragLeave);
  placeholder.addEventListener("drop", dragDrop);
});

function dragStart(e) {
  itemHeightValue = e.target.clientHeight
  e.target.classList.add("hold");
  setTimeout(() => e.target.classList.add("hide"), 0);
}

function dragEnd(e) {
  e.target.classList.remove("hold", "hide");
  // e.target.className = "item";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.target.classList.add("hovered");
  e.target.style.height = itemHeightValue + 'px';
}
function dragLeave(e) {
  e.target.classList.remove("hovered");
  e.target.style.height = null;
}
function dragDrop(e) {
  e.target.append(item);
  e.target.classList.remove("hovered");
}

