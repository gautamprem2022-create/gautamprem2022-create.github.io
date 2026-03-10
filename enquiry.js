function validateForm(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;

if(name==""){
alert("Name is required");
return false;
}

if(email==""){
alert("Email is required");
return false;
}

if(phone.length<10){
alert("Enter valid phone number");
return false;
}

alert("Form Submitted Successfully");

return true;

}
