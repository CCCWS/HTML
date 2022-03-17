var signinButton = document.getElementById("signinButton");
signinButton.addEventListener("click", sign);

function sign() {
  var userid = document.getElementById("userid").value;
  var userpw = document.getElementById("userpw").value;

  if (userid == "123" && userpw == "123") {
    alert("Login");
  } else {
    alert("Fail");
  }
}
