const btnList = document.querySelectorAll(".btn");
const imgList = document.querySelectorAll("img");

function removeBtnClass() {
  const btnSelected = document.querySelector(".btn.selected");
  btnSelected.classList.remove("selected");
}

function addBtnClass(btn) {
  btn.classList.add("selected");
}

function removeImgClass() {
  const imgSelect = document.querySelector(".img.selected");
  imgSelect.classList.remove("selected");
}

function addImgClass(i) {
  imgList[i].classList.add("selected");
}

btnList.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    removeBtnClass();
    addBtnClass(btn);
    removeImgClass();
    addImgClass(i);
  });
});
