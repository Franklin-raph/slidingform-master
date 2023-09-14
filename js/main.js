
document.querySelector(".sign-in-options-back-btn").addEventListener("click", ()=>{
    document.querySelector("#form2").style.left = "150%"
    document.querySelector("#form1").style.left = "50%"
})

document.querySelector(".sign-in-options").addEventListener("click", ()=>{
    document.querySelector("#form1").style.left = "-50%"
    document.querySelector("#form2").style.left = "50%"
})

document.querySelector(".sign-in-to-org").addEventListener("click", ()=>{
    document.querySelector("#form2").style.left = "150%"
    document.querySelector("#form1").style.left = "50%"
})

document.querySelector(".next-btn").addEventListener("click", ()=> {
    if(document.querySelector("input").value === ""){
        console.log(document.querySelector("#form1 .error-text").style)
        document.querySelector("#form1 .error-text").style.display = "block"
    }
})

