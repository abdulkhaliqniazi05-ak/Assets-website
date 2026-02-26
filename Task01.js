let per = document.getElementById("per");
function updatestatus() {
  if (navigator.onLine) {
    per.innerText = "Online";
    per.style.color = "green";
    alert("you are online")
  }
  else (

    per.innerText = "ofline",
    per.style.color = "red",
    alert("you are ofline")
  )
}
updatestatus();

window.addEventListener(online, updatestatus);
window.addEventListener(ofline, updatestatus);













