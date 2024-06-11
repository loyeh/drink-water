const glasses = Array.from(document.querySelectorAll(".glass"));
const empty = document.querySelector(".empty");
const liter = document.querySelector(".liter");
const full = document.querySelector(".full");

glasses.forEach((glass, index) => {
  //add listener for any glass that have been clicked
  glass.addEventListener("click", () => {
    //activate the empty part to show when glasses clicked
    empty.classList.add("active");
    let size = (index + 1) * 12.5;
    //changing the style and text of the full and empty parts
    empty.style.height = `${size}%`;
    empty.textContent = `${size}%`;
    full.style.height = `${100 - size}%`;
    liter.textContent = `${2 - size / 50}L`;
    //cheking the end point when every glass has been selected
    if (index == 7) {
      full.classList.add("deactive");
    } else {
      full.classList.remove("deactive");
    }
    //first remove active class
    glasses.forEach((glass) => glass.classList.remove("active"));
    //then add active class to any glasses before one that clicked
    for (let i = 0; i <= index; i++) {
      glasses[i].classList.add("active");
    }
  });
});

//reset the whole page when clicked outside containers

window.addEventListener("click", (e) => {
  console.log(e.target.classList[0]);
  if (!e.target.classList[0]) {
    window.location.reload();
  }
});
