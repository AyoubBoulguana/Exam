const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let isMouseDown = false;
let startX = 0;
let scrollLeft = 0;

slider.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.classList.remove("cursor-grab");
  slider.classList.add("cursor-grabbing");
});

slider.addEventListener("mouseleave", () => {
  isMouseDown = false;
  slider.classList.remove("cursor-grabbing");
  slider.classList.add("cursor-grab");
});

slider.addEventListener("mouseup", () => {
  isMouseDown = false;
  slider.classList.remove("cursor-grabbing");
  slider.classList.add("cursor-grab");
});

slider.addEventListener("mousemove", (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

nextBtn.addEventListener("click", () => {
  const firstChild = slider.firstElementChild;
  slider.appendChild(firstChild);
});

prevBtn.addEventListener("click", () => {
  const lastChild = slider.lastElementChild;
  slider.insertBefore(lastChild, slider.firstChild);
});
