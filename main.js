// let closeBtn = document.querySelector('.fa-times');
// let openBtn = document.querySelector('.fa-bars');
// let sideBarMenu = document.querySelector('#sideBarNav');

// openBtn.addEventListener('click', ()=>
// {
// sideBarMenu.style.width="200px";
// })


// closeBtn.addEventListener('click', ()=>
// {
// sideBarMenu.style.width="0px";
// })

let closeBtn = document.querySelector('.fa-arrow-circle-right');
let openBtn = document.querySelector('.fa-arrow-circle-left');


let homeBtn = document.querySelector('.fa-home');
let homeMenuBtn = document.querySelector('.fa-home-user');
let homeText = document.querySelector('.home');



let aboutBtn = document.querySelector('.fa-info-circle');
let aboutMenuBtn = document.querySelector('.fa-info');
let aboutText = document.querySelector('.about');
let aboutCloseBtn = document.querySelector('.fa-times-circle');


let contactBtn = document.querySelector('.fa-contact-card');
let contactMenuBtn = document.querySelector('.fa-contact-book');
let contactText = document.querySelector(".contact");
let contactCloseBtn = document.querySelector('.fa-window-close');


let sideBarMenuOpen = document.querySelector('#sideBarNavOpen');
let sideBarMenuClosed = document.querySelector('#sideBarNavClosed');
let aboutMenu = document.querySelector('#aboutMenu');
let contactMenu = document.querySelector('#contactMenu');




openBtn.addEventListener('click', ()=>
{
    sideBarMenuClosed.style.width="50px";
    sideBarMenuOpen.style.width="0px";
    aboutMenu.style.width="0px";
    contactMenu.style.width="0px";
})


closeBtn.addEventListener('click', ()=>
{
    sideBarMenuClosed.style.width="0px";
    sideBarMenuOpen.style.width="200px";
    aboutMenu.style.width="0px";
    contactMenu.style.width="0px";
})



homeBtn.addEventListener('click', ()=>
{
    sideBarMenuClosed.style.width="0px";
    aboutMenu.style.width="0px";
    sideBarMenuOpen.style.width="200px";
    contactMenu.style.width="0px";
})
homeMenuBtn.addEventListener('click', ()=>
{
    sideBarMenuClosed.style.width="0px";
    aboutMenu.style.width="0px";
    sideBarMenuOpen.style.width="200px";
    contactMenu.style.width="0px";
})
homeText.addEventListener('click', ()=>
{
    sideBarMenuClosed.style.width="50px";
    aboutMenu.style.width="0px";
    sideBarMenuOpen.style.width="0px";
    contactMenu.style.width="0px";
})



aboutBtn.addEventListener('click', ()=>
{
    sideBarMenuClosed.style.width="0px";
    aboutMenu.style.width="900px";
    sideBarMenuOpen.style.width="0px";
    contactMenu.style.width="0px";
})
aboutMenuBtn.addEventListener('click', ()=>
{
    sideBarMenuClosed.style.width="0px";
    aboutMenu.style.width="900px";
    sideBarMenuOpen.style.width="0px";
    contactMenu.style.width="0px";
})
aboutText.addEventListener('click',()=>
{
    sideBarMenuClosed.style.width="0px";
    aboutMenu.style.width="900px";
    sideBarMenuOpen.style.width="0px";
    contactMenu.style.width="0px";
})
aboutCloseBtn.addEventListener('click',()=>
{
    sideBarMenuClosed.style.width="0px";
    sideBarMenuOpen.style.width="200px";
    aboutMenu.style.width="0px";
    contactMenu.style.width="0px";
})



contactBtn.addEventListener('click',()=>
{
    sideBarMenuClosed.style.width="0px";
    sideBarMenuOpen.style.width="0px";
    aboutMenu.style.width="0px";
    contactMenu.style.width="900px";
})
contactMenuBtn.addEventListener('click',()=>
{
    sideBarMenuClosed.style.width="0px";
    sideBarMenuOpen.style.width="0px";
    aboutMenu.style.width="0px";
    contactMenu.style.width="900px";
})
contactText.addEventListener('click',()=>
{
    sideBarMenuClosed.style.width="0px";
    sideBarMenuOpen.style.width="0px";
    aboutMenu.style.width="0px";
    contactMenu.style.width="900px";
})
contactCloseBtn.addEventListener('click',()=>
{
    sideBarMenuClosed.style.width="0px";
    sideBarMenuOpen.style.width="200px";
    aboutMenu.style.width="0px";
    contactMenu.style.width="0px";
})
