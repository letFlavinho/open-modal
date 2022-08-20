var boxModal = document.querySelector(".box__modal");
var openButton = document.getElementById("open");
var closeButton = document.getElementById("close");

function openModal() {
  boxModal.classList.remove("box__invisible");
}

function closeModal() {
  boxModal.classList.add("box__invisible");
}

closeButton.onclick = closeModal;

openButton.onclick = openModal;

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
