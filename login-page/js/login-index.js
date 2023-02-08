

// click sign btn
function buttonLogin() {
	var email = document.querySelector("#email").value
	var password = document.querySelector("#password").value
	if(emailVerify(email, document.getElementById("form-email-message")) &&
		passwordVerify(password, document.getElementById("form-password-message"))) {
		alert('login！')
	} else {
		return false;
	}
}
// click Create btn
function buttonCreate() {
	var email = document.querySelector("#create-email").value
	var password = document.querySelector("#create-password").value
	var confirmPassword = document.querySelector("#create-confirmPassword").value
	if(emailVerify(email, document.getElementById("form1-email-message")) &&
		passwordVerify(password, document.getElementById("form1-password-message")) &&
		confirmPasswordVerify(password, confirmPassword, document.getElementById("form1-confirmPassword-message"))) {
		alert('register！')
	} else {
		return false;
	}
}
//email verify and password verify start--------------------------------------------------
function emailVerify(email, emailMessage) { //emali and message Dom
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	if(!email) {
		emailMessage.style.display = "block";
		emailMessage.innerHTML = "<img style='height:15px' src='img/waring.png' />" +
			"<span>Please enter <span>"
		return false;
	}
	if(!email.includes('@')) {
		emailMessage.style.display = "block";
		emailMessage.innerHTML = "<img style='height:15px' src='img/waring.png' />" +
			"<span>Please include an '@' in the email address.<span>" +
			"</br>'" + email + "'is missing an '@'";
		return false;
	}
	if(!emailRegex.test(email)) {
		emailMessage.style.display = "block";
		emailMessage.innerHTML = "<img style='height:15px' src='img/waring.png' />" +
			"<span>Invalid email format<span>";
		return false;
	} else {
		emailMessage.style.display = "none";
		emailMessage.innerHTML = "";
		return true;
	}
}

function passwordVerify(password, passwordMessage) { //password and message Dom
	if(!password) {
		passwordMessage.style.display = "block";
		passwordMessage.innerHTML = "<img style='height:15px' src='img/waring.png' />" +
			"<span>Please fill in this field. <span>"
		return false;
	}
	if(password.length < 6) {
		passwordMessage.style.display = "block";
		passwordMessage.innerHTML = "<img style='height:15px' src='img/waring.png' />" +
			"<span>Place lengthen this text to 6 characters or more<span>" +
			"(you are currently using " + password.length + " characters).";
		return false;
	} else {
		passwordMessage.style.display = "none";
		passwordMessage.innerHTML = "";
		return true;
	}

}

function confirmPasswordVerify(createPassword, confirmPassword, confirmPasswordMessage) {
	//createPassword confirmPassword and message Dom 
	if(!createPassword) {
		passwordVerify(createPassword, document.getElementById("form1-password-message"))
		document.querySelector("#create-confirmPassword").value = ''
	} else {
		confirmPasswordMessage.style.display = "none";
		confirmPasswordMessage.innerHTML = "";

		if(!confirmPassword) {
			confirmPasswordMessage.style.display = "block";
			confirmPasswordMessage.innerHTML = "<img style='height:15px' src='img/waring.png' />" +
				"<span>Please fill in this field. <span>"
			return false;
		}

		if(createPassword !== confirmPassword) {
			setTimeout(() => {
				confirmPasswordMessage.style.display = "block";
				confirmPasswordMessage.innerHTML = "<img style='height:15px' src='img/waring.png' />" +
					"<span>Password does not match <span>";
			}, 100)

			return false;
		} else {

			return true;
		}
	}
}
//email verify and password verify end--------------------------------------------------