let title = document.getElementById("title");
let registerBtn = document.getElementById("registerBtn");
let loginBtn = document.getElementById("loginBtn");
let nameSpace = document.getElementById("nameSpace");

loginBtn.addEventListener("click", ()=> {
    nameSpace.style.maxHeight = "0";
    nameSpace.style.border= "0";
    title.innerHTML = "Log In";
    registerBtn.classList.add("disabled");
    loginBtn.classList.remove("disabled");
})

registerBtn.addEventListener("click", ()=> {
    nameSpace.style.maxHeight = "60px";
    nameSpace.style.border=  "1px";
    title.innerHTML = "Register ";
    registerBtn.classList.remove("disabled");
    loginBtn.classList.add("disabled");
})