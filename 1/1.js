const modal = document.getElementById("myModal");
const btn = document.getElementById("submit");
const closeicone = document.getElementsByClassName("close")[0];
function openModal(e) {
  e.preventDefault()
  modal.style.display = "block";
  setTimeout(function() {location.reload();}, 8000);
}
closeicone.addEventListener("click",()=>{
    modal.style.display = "none";
  })
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }