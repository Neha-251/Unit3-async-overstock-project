


let createAccount_btn = document.getElementById("createAccount_btn");


createAccount_btn.addEventListener("click", () => {

    let email_inp = document.getElementById("email_inp").value;

    let createPsd_inp = document.getElementById("createPsd_inp").value;

    let confirmPsd_inp = document.getElementById("confirmPsd_inp").value;
    let confirmPsd = document.getElementById("confirmPsd_inp");

    let alert_msg = document.getElementById("alert_msg");



    let signup_flag = false;

    if(email_inp.length == 0 || createPsd_inp.length == 0 || confirmPsd_inp.length == 0) {
        alert_msg.innerHTML = "  Please fill Every Field";
        alert_msg.style.visibility = "visible";

    } else if(createPsd_inp == confirmPsd_inp) {
        confirmPsd.style.border = "1px solid rgb(152, 153, 152)";
        signup_flag = true;
        let email = email_inp;
        let psd = confirmPsd_inp;
        alert_msg.style.visibility = "hidden";
        alert("Signup Successfull");

        localStorage.setItem("emailId", email);
        localStorage.setItem("password", psd);


    } else {
        confirmPsd.style.border = "1px solid rgb(206,121,127)";

        alert_msg.style.visibility = "visible";

        alert_msg.innerHTML = "  The passwords you have entered do not match. Please try again.";

    }
    
    
    

})

let signIn_btn = document.getElementById("signIn_btn");


signIn_btn.addEventListener("click", () => {



    let emailId = localStorage.getItem("emailId");
    let password = localStorage.getItem("password");
    
    
    let email_inp_in = document.getElementById("email_inp_in").value;
    let email_inp =  document.getElementById("email_inp_in");
    let Psd_inp_in = document.getElementById("Psd_inp_in").value;
    let Psd_inp = document.getElementById("Psd_inp_in");
    
    
    

    if(email_inp_in.length == 0 || Psd_inp_in.length == 0 ){
        alert_msg.style.visibility = "visible";

        alert_msg.innerText = "  Please fill Every Field";

    } else if((emailId !== email_inp_in)) {
        alert_msg.style.visibility = "visible";

        alert_msg.innerText = "This Email Address is Invalid";

        email_inp.style.border = "1px solid rgb(206,121,127)";
        
    } else if((password !== Psd_inp_in)) {

        alert_msg.style.visibility = "visible";

        alert_msg.innerText = "This Password Address is Invalid";

        Psd_inp.style.border = "1px solid rgb(206,121,127)";

    } else if((emailId == email_inp_in) && (password == Psd_inp_in)){

        Psd_inp.style.border = "1px solid rgb(152, 153, 152)";
        email_inp.style.border = "1px solid rgb(152, 153, 152)";
        alert_msg.style.visibility = "hidden";

        alert("Login Successfull");
        let signup_flag = "successfull";
        localStorage.setItem("signup_flag", signup_flag);
    }


});