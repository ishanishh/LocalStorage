function store(){
    var name,hex,contact,email,first, last;

name = document.getElementById("Pname").value;
hex = document.getElementById("Hcode").value;
contact = document.getElementById("PhNo").value;
e = document.getElementById("Email").value;
first = document.getElementById("Fname").value;
last = document.getElementById("Lname").value;

var pname = localStorage.setItem("paint name", name);
var hexa = localStorage.setItem("hex code", hex);
var contact = localStorage.setItem("contact", contact);
var email = localStorage.setItem("email", e);
var fname = localStorage.setItem("firstname", first);
var lname = localStorage.setItem("last name", last);
}

