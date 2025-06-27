alert("This is my maze.");
var pw = prompt("Password: ");
if (pw === '0807') {
  alert("Correct");
} else {
  alert("Incorrect");
  window.location.replace("404.html");
}
