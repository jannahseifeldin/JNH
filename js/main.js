var getUserName = prompt("Hi there! Please provide your name to login");

console.log(getUserName);

document.getElementById("J").innerText = getUserName;

// tooltip 

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })