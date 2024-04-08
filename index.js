const menu = document.querySelector(".menu-content");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const navBar = document.querySelector(".navbar");
const body = document.querySelector("body");

menuBtn.onclick =()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    body.classList.add("disabledScroll");
}
cancelBtn.onclick =()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    body.classList.remove("disabledScroll");
}
window.onscroll =()=>{
    this.scrollY > 20 ? navBar.classList.add("sticky"): navBar.classList.remove("sticky");
}