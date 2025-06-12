function store(){
    var name,hex,contact,email;

name = document.getElementById("Pname").value;
hex = document.getElementById("Hcode").value;
contact = document.getElementById("PhNo").value;
e = document.getElementById("Email").value;

var pname = localStorage.setItem("paint name", name);
var hexa = localStorage.setItem("hex code", hex);
var contact = localStorage.setItem("contact", contact);
var email = localStorage.setItem("email", e);
}
