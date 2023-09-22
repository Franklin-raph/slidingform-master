
document.querySelector(".sign-in-options-back-btn").addEventListener("click", ()=>{
    document.querySelector("#form2").style.left = "150%"
    document.querySelector("#form1").style.left = "50%"
})

function returnBackToSignInScreen(){
    document.querySelector("#form1").style.left = "50%"
    document.querySelector("#form3").style.left = "150%"
    document.querySelector("#form4").style.left = "150%"
}

document.querySelector(".sign-in-options").addEventListener("click", ()=>{
    document.querySelector("#form1").style.left = "-50%"
    document.querySelector("#form2").style.left = "50%"
})

document.querySelector(".sign-in-to-org").addEventListener("click", ()=>{
    document.querySelector("#form2").style.left = "150%"
    document.querySelector("#form1").style.left = "50%"
})

document.querySelector(".form1-next-btn").addEventListener("click", ()=> {
    if(document.querySelector("input[type=text]").value === ""){
        console.log(document.querySelector("#form1 .error-text").style)
        document.querySelector("#form1 .error-text").style.display = "block"
    }else{
        document.querySelector("#form1").style.left = "-50%"
        document.querySelector("#form4").style.left = "50%"
    }
})

document.querySelector(".form4-next-btn").addEventListener("click", ()=>{
    if(document.querySelector("input[type=password]").value === ""){
        console.log(document.querySelector("#form4 .error-text").style)
        document.querySelector("#form4 .error-text").style.display = "block"
    }else{
        window.location.href = "dashboard.html"
    }
})

document.querySelector(".cant-access-acct-btn").addEventListener("click", ()=>{
    document.querySelector("#form1").style.left = "-50%"
    document.querySelector("#form3").style.left = "50%"
})

