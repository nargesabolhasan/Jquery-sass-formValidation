const modal = document.getElementById("myModal");
const btn = document.getElementById("submit");
const closeicone = document.getElementsByClassName("close")[0];


function openModal(e) {
  e.preventDefault()
  const formElement = e.target
  const values = {}
  for (inputs of formElement) {
    if (inputs.name) {
      values[inputs.name] = inputs.value
    }
  }
  let text
  const box = document.forms["myform"]["first"]
  const box2 = document.forms["myform"]["last"]
  if (box.value === ""||box2.value === "") {
    text = "Input not valid!"
    box.classList.add("br-color-danger")
    box2.classList.add("br-color-danger")

  } else {
    modal.style.display = "block";
    setTimeout(function () { location.reload(); }, 8000);
    text = ""
    document.getElementById("demo2").innerHTML 
  }
  document.getElementById("demo").innerHTML = text;
}



closeicone.addEventListener("click", () => {
  modal.style.display = "none";
})

// ها را برای یادگیری بهتر مطالب (صرفا جهت تمرین) اضافه کردم validation توابع

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

