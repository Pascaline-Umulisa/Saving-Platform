
const btnLogin=document.getElementById("one")
const logging=document.getElementById("logging")
const signUp=document.getElementById("signUp")
const myInputs=document.querySelectorAll("input")
signUp.addEventListener("click",checkInputs)
function checkInputs(){
    myInputs.forEach(input=>{
        let state=input.value
        // const success=document.createElement("p")
        //     success.id="new"
           const myContent= input.nextElementSibling
           const verify=signUp.nextElementSibling
        //    myContent.appendChild(success)
        if(state===""){
            // myContent.classList.add("fa-solid fa-circle-exclamation")
            myContent.innerHTML="You must fill here!"
            myContent.style.color="#B32F20"
            logging.style.width="60%"
            logging.style.marginLeft="9%"
            myContent.style.fontSize="15px"
            input.style.border="solid 2px #B32F20"
            verify.innerHTML="Filled all required details!"
            verify.style.color="#15307D"
        }
        else{
            myContent.innerHTML=""
            input.style.border="none"
        }
    })
}
// console.log("hdjhsjsj")
            // const toberemoved=document.querySelectorAll("p")
            // toberemoved.forEach(n=>n.remove())
            // success.remove()
 // const success=document.createElement("i")
            // myContent.appendChild(success)
            // success.class="fa-solid fa-circle-exclamation"
            // success.style.padding="3%"
            // success.style.color="white"
            // success.style.backgroundColor="blue"
            // console.log(success)
            // success.innerHTML='hfhfhf'


            // myContent.classList.add("fa-solid fa-circle-exclamation")
            // <i class="fa-solid fa-circle-exclamation"></i>
        //     const success=document.createElement("p")
        //     success.id="new"
        //    const myContent= document.getElementById("both")
        //    myContent.appendChild(success)
        //    success.innerHTML="Required"
            // let holder=document.createElement("p")
            // holder.innerHTML="Required"
            // const big=getElementById("both")
// const close=document.querySelector("i")
// close.addEventListener("click",closeForm)

// function openForm(){
//     // logging.style.visibility="visible"
//     const element = document.querySelectorAll(".both");
//     element.forEach(n=>
//         n.remove())
//         logging.classList.add("showLoginForm")
// }

// function closeForm(){
//     logging.classList.remove("showLoginForm")
//     // btnLogin.removeEventListener("click",openForm)
   
// }
// signUp.addEventListener("click",function(){
//     logging.style.visibility="visible"
//     const element = document.querySelectorAll(".sig").forEach(n=>
//         n.remove)

// })




// logging.classList.toggle("showLoginForm")
    // console.log("hgdjks")

     // logging.style.visibility="hidden"