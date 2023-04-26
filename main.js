const toggleBtn = document.querySelector(".navbar_toggleBtn")
const menu = document.querySelector(".navbar_menu")
const icons = document.querySelector(".navbar_icons")
const nameDiv = document.querySelector("#name")
const bdTest = document.querySelector("#bd_test form")
const month = document.querySelector("#month");
const day = document.querySelector("#day");
const allDiv = document.querySelector("#info");
const last = document.querySelector("#last");


toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active")
  icons.classList.toggle("active")
});


function clearAll() {
  allDiv.remove();
  last.style="display:block"
  last.classList.add("fadein")
}


function congrats() {
  allDiv.classList.add("fadeout");
  setTimeout(clearAll, 1900);
}

//input type number로 받았는데 왜 string일까
//console.log(typeof(month.value))
function handleOnsubmit(e) {
    e.preventDefault();
    if ((month.value ==="8") && (day.value === "11")) {
      congrats();
    } else {
      const h3 = document.querySelector("#bd_test h3")
      h3.style = "display:block"
      h3.classList.add("blink")
    }
}

bdTest.addEventListener("submit", handleOnsubmit)

function PrindBd() {
    const bd = document.querySelector("#bd_select");
    bd.style = "display:block";
    bd.classList.add("fadein");
}

function PrintH1() {
    const comment = document.querySelector("#bd_test h1");
    comment.style = "display:block";
    comment.classList.add("fadein")
    setTimeout(PrindBd, 1500);
}

function nameClear() {
  nameDiv.remove();
  document.getElementById("result").classList.add("moveup");
} 

function PrintName() {
    nameDiv.classList.add("fadeout");
    setTimeout(nameClear, 2000);
    const guest_name = document.querySelector("#guest_name").value;
    const thxMsg = document.querySelector("#result");
    thxMsg.innerText = `Thank you for your visitng, ${guest_name}.`;
    thxMsg.classList.add("fadein");
    setTimeout(PrintH1, 1500);
}