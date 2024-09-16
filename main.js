var form = {
 inputemail:() => document.querySelector("#email"),
input_password:() => document.querySelector("#password"),
recover_button: () => document.querySelector("#recover"),
login_button: () => document.querySelector("#login"),
sign_button: () => document.querySelector("#sign"),

password_invented: () => "11111111",
email: () => 0,
password: () => 0,

}


function login() {
    email = form.inputemail().value
    password = form.input_password().value
    if (email.includes("@") == false || email.includes(".") == false) {
        document.querySelector("#erroremail").innerText = "Invalid email!"


    }
    else if (validateEmail(email)) {
        document.querySelector("#erroremail").innerText = ""
    }

    if (password != form.password_invented()) {
        document.querySelector("#errorpassword").innerText = "Your password is incorrect"
        form.recover_button().style.display = "block"
    } else {
        document.querySelector("#errorpassword").innerText = ""
    }

    if (password == form.password_invented() && validateEmail(email)) {
        //location.href="home.html "
        //From firebase
        ShowLoading()

        console.log("Before")
        firebase.auth().signInWithEmailAndPassword(form.inputemail().value, form.input_password().value).then(Response => {
            HideLoading()
            location.href = "home.html"
        }).catch(error => {
            HideLoading()
            alert(getErrorMessage(error))
        }); console.log("Then")

        function getErrorMessage(error) {
            if (error.code =="auth/invalid-credential") {
                return "Invalid User"
            } else {
                return error.message
            }
        }

        //End from firebase
    }


}

function recover() {
    location.href="recover.html"
}
function sign() {
    //location.href="sign.html"
    ShowLoading()
}


function verify() {
    email = form.inputemail().value
    password = form.input_password().value
    if (password == form.password_invented() && validateEmail(email)) {
        form.login_button().style.opacity = 1

        document.querySelector("#errorpassword").innerText = ""
        document.querySelector("#erroremail").innerText = ""
    }
    else {
        form.login_button().style.opacity = .5
    }
}
function timer() {
    setInterval(verify, 1)
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}





timer()
form.recover_button().addEventListener("click", recover)
form.login_button().addEventListener("click", login)
form.sign_button().addEventListener("click", sign)




/*function login() {
    email = inputemail.value
    if (!email) {
        login_button.disabled = true
        recover_button.disabled=true
    } else if (validarEmail(email)) {
        login_button.disabled = false
        login_button.style.opacity=1
    } else {
        login_button.disabled=false
    }
}


function validarEmail(email) {
    var re = /S+@S+.S+/;
    return re.test(email);
}*/
