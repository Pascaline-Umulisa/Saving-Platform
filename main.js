const btnLogin=document.getElementById("one")
const logging=document.getElementById("logging")
const signUp=document.getElementById("two")
btnLogin.addEventListener("click",openForm)

const close=document.querySelector("i")
close.addEventListener("click",closeForm)

function openForm(){
    logging.style.visibility="visible"
    const element = document.querySelectorAll(".both");
    element.forEach(n=>
        n.remove())
}

function closeForm(){
    logging.style.visibility="hidden"
    btnLogin.removeEventListener("click",openForm)
   
}
signUp.addEventListener("click",function(){
    logging.style.visibility="visible"
    const element = document.querySelectorAll(".sig").forEach(n=>
        n.remove)

})




// logging.classList.toggle("showLoginForm")
    // console.log("hgdjks")

     // logging.style.visibility="hidden"