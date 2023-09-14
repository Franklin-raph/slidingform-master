
document.querySelector(".sign-in-options-back-btn").addEventListener("click", ()=>{
    document.querySelector("#form2").style.left = "150%"
    document.querySelector("#form1").style.left = "50%"
    console.log("Hello");
})

document.querySelector(".sign-in-options").addEventListener("click", ()=>{
    document.querySelector("#form1").style.left = "-50%"
    document.querySelector("#form2").style.left = "50%"
    console.log("Hiiii");
})

console.log(document.querySelector(".sign-in-options-back-btn"));
