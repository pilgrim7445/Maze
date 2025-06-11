alert("This is my maze.");
var pw = prompt("Password: ");
if (pw === '0807') {  // Use string for password comparison
  alert("correct");
} else {
  alert("incorrect");
  window.location.replace("blank.page");  // Ensure the URL is correct and accessible
}
