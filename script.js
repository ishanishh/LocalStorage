function store(){
    var name,hex,contact;

name = document.getElementById("Pname").value;
hex = document.getElementById("Hcode").value;
contact = document.getElementById("PhNo").value;

var pname = localStorage.setItem("paint name", name);
var hexa = localStorage.setItem("hex code", hex);
var contact = localStorage.setItem("contact", contact);
}
