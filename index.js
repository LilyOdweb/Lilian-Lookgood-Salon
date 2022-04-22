//validate function that will execute when called
function validate(){

var name = document.getElementById("name").value;
var number = document.getElementById("number").value;
//email must have @ symbol
var email=document.getElementById("email").value.indexOf("@");
var message=document.getElementById("message").value;
//if the name is empty, alert will pop up
if(name==""){
	alert("Please enter your full name");
	return false;
}
//if name is a number
if(!isNaN(name)){
	//error message
	alert("Full name should be in character");
	return false;
}
//if number is empty
if (number==""){
	//error message
	alert("Please enter your phone number");
	return false;
}
//if it is not a number
if (isNaN(number)){
	//error message
	alert("Phone number should be in digits.");
	return false;
}
//if number length is less than 13
if(number.length!=13){
	//error message
	alert("It must be 13 digits");
}
//if message is empty
if(message==""){
	//error message
	alert("Please enter a valid message");
	return false;

}

}
//array of products on the webpage
const products=[
{name:"Hair shampoos"},
{name:"wigs"},
{name:"Nail polish"},
{name:"Moisturisers"},
{name:"Hair accessories"},
{name:"Hair equipments"}
]
//find product name "moisturisers" and return in console
const foundProduct=products.find((product)=>{
	return product.name==="Moisturisers"
})
console.log(foundProduct)


//find each product and return in console
products.forEach((product)=>{
	console.log(product.name)
})

/*After form is submitted, a thank you message pops up
function mySubmit(){
	document.getElementById("form").innerHTML="Form submitted! Thank you for contacting us.";
}
*/