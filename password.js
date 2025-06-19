alert("This is my maze.");
var pw = prompt("Password: ");
if (pw === '0807') {  // Use string for password comparison
  alert("correct");
} else {
  alert("incorrect");
  window.location.replace("404.html");
}
