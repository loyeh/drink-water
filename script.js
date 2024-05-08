let glasses = document.querySelectorAll(".glass");
const empty = document.querySelector(".empty");
const full = document.querySelector(".full");
const liter = document.querySelector(".liter");
glasses = Array.from(glasses);

console.log(glasses, empty, full);

glasses.forEach((glass, index) => {
  glass.addEventListener("click", () => {
    empty.classList.add("active");
    let size = (index + 1) * 12.5;
    empty.style.height = `${size}%`;
    empty.textContent = `${size}%`;
    full.style.height = `${100 - size}%`;
    liter.textContent = `${2 - size / 50}L`;
    if (index == 7) {
      full.classList.add("deactive");
    } else {
      full.classList.remove("deactive");
    }
    glasses.forEach((glass) => glass.classList.remove("active"));
    for (let i = 0; i <= index; i++) {
      glasses[i].classList.add("active");
    }
  });
});
window.addEventListener("click", (e) => {
  console.log(e.target.classList[0]);
  if (!e.target.classList[0]) {
    // glasses.forEach((glass) => glass.classList.remove("active"));
    // empty.classList.remove("active");
    // full.style.height = `100%`;
    // liter.textContent = `2L`;
    // full.classList.remove("deactive");
    window.location.reload();
  }
});
