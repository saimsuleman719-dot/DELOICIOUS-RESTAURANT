function welcome(){
alert("Welcome to Delicious Restaurant!");
}

function order(food){
alert("You ordered: " + food);
}

document.getElementById("bookingForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;

alert("Thank you "+name+"! Your table has been booked.");

this.reset();

});