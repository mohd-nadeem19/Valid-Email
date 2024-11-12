const form = document.getElementById("email-form");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value

    if (validateEmail(email)){
        alert("Valid Email");
        errorMsg.style.display = "none"
    } else {
        // errorMsg.innerText = "Invalid Email Address";
        errorMsg.style.display = "block"
    }
});

function validateEmail(email){
    const emailPattern =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email)
}
