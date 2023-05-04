let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("pass");
let cpassword = document.getElementById("cpass");
let flag = 1;

function validateForm() {
  if (username.value == "") {
    document.getElementById("userError").innerHTML = "User name is empty ";
    flag = 0;
  } else if (username.value.length < 3) {
    document.getElementById("userError").innerHTML =
      "User name req min 3 char ";
    flag = 0;
  } else {
    document.getElementById("userError").innerHTML = "";
    flag = 1;
  }

  if (email.value == "") {
    document.getElementById("emailError").innerHTML = "Email is empty";
    flag = 0;
  } else {
    document.getElementById("emailError").innerHTML = "";
    flag = 1;
  }

  if (password.value == "") {
    document.getElementById("passError").innerHTML = "Password is empty";
    flag = 0;
  } else if (password.value.length < 7) {
    document.getElementById("passError").innerHTML = "Pass req min 7 char";
    flag = 0;
  } else {
    document.getElementById("passError").innerHTML = "";
    flag = 1;
  }

  if (cpassword.value == "") {
    document.getElementById("cpassError").innerHTML = "Password is empty";
    flag = 0;
  } else if (password.value != cpassword.value) {
    document.getElementById("cpassError").innerHTML = "Pass is not matching";
    flag = 0;
  } else {
    document.getElementById("cpassError").innerHTML = "";
    flag = 1;
  }

  if (flag) {
    alert("Logged In Successfully");

    return true;
  } else {
    return false;
  }
}
