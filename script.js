 
 const passInput = document.querySelector('.pass-field input');
 const eyeIcon = document.querySelector('.pass-field i');
 const requirmentList = document.querySelectorAll('.requirment-list li ');

const requirements = [
    { regex : /.{8,}/, index: 0},
    { regex : /[0-9]/, index: 1},
    { regex : /[a-z]/, index: 2},
    { regex : /[^A-Za-z0-9]/, index: 3},
    { regex : /[A-Z]/, index: 4},
]

passInput.addEventListener( "keyup" , (e) => {
    requirements.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirmentList[item.index];
        if(isValid){
            requirementItem.firstElementChild.className ="fa-solid fa-check";
            requirementItem.classList.add("valid");
        }else {
            requirementItem.firstElementChild.className = "fa-solid fa-circle" ;
            requirementItem.classList.remove("valid");
        }
    })
} )

 eyeIcon.addEventListener("click" ,  ()  => {
    passInput.type =  passInput.type === "password" ? "text" : "password";
    eyeIcon.className = `fa-solid fa-eye${passInput.type === "password" ? "" : "-slash"}`;
 })
