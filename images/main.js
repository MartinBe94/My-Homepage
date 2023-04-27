let closeBtn = document.querySelector(".fa-times");
let openBtn = document.querySelector(".fa-bars");
let sideBarMenu = document.querySelector("#sidebarmenu");

;

openBtn.addEventListener("click", ()=>
{
sideBarMenu.style.width = "250 px";
})


closeBtn.addEventListener("click", ()=>
{
sideBarMenu.style.width = "0 px";
})

