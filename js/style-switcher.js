/**
 * Created by Mohammed Alhakami on 28/02/22.
 */
const styleSwitcherToggle=document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",()=>{
   document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll",()=>{
    if(   document.querySelector(".style-switcher").classList.contains("open")){
    document.querySelector(".style-switcher").classList.remove("open");

}
})


const alternateStyles=document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");

        }

    })
}


const dayNoght = document.querySelector(".day-night");
dayNoght.addEventListener("click",() => {
    dayNoght.querySelector("i").classList.toggle("fa-sun-o");
    dayNoght.querySelector("i").classList.toggle("fa-moon-o");
document.body.classList.toggle("dark");

})
window.addEventListener("load",() => {
    if(document.body.classList.contains("dark")){
    dayNoght.querySelector("i").classList.add("fa-sun-o");
}
else{
    dayNoght.querySelector("i").classList.add("fa-moon-o")
}
})