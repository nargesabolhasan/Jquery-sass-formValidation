const modal = document.getElementById("myModal");
const btn = document.getElementById("submit");
const closeicone = document.getElementsByClassName("close")[0];


function openModal(e) {
  const unvalid1 = document.getElementById("demo2").innerHTML
  const unvalid2 = document.getElementById("demo").innerHTML
  if (unvalid1 === "Input not valid!" || unvalid2 === "Input not valid!") {
    e.preventDefault()
  } else {
    e.preventDefault()
    modal.style.display = "block";
    setTimeout(function () { location.reload(); }, 8000);
  }
}

closeicone.addEventListener("click", () => {
  modal.style.display = "none";
})


function validation(e) {
  let string = document.getElementById("first").value.split("")
  let text;
  if (string.length <= 3) {
    text = "Input not valid!";
    e.target.classList.add("br-color-danger")
  } else {
    text = "";
    e.target.classList.remove("br-color-danger")
  }
  document.getElementById("demo").innerHTML = text;

}

function validation2(e) {
  let string = document.getElementById("last").value.split("")
  let text;
  if (string.length <= 3) {
    text = "Input not valid!";
    e.target.classList.add("br-color-danger")
  } else {
    text = "";
    e.target.classList.remove("br-color-danger")
  }
  document.getElementById("demo2").innerHTML = text;

}