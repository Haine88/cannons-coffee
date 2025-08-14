let form = document.querySelector("form");
let message = document.querySelector(".message-container");
let coffeeList = [];


function coffeeForm() {
	event.preventDefault(); //Prevent default behavior
	const data = new FormData(event.target); //Collect the data from the form
	const dataObject = Object.fromEntries(data.entries()); //Create the data object
	
	let userName = dataObject.name;
	let userEmail = dataObject.email;
	let userNumber = dataObject.phone;
	let userComment = dataObject.comment;
	let userFlavor = dataObject.flavor;
	let userInterest = dataObject.interest;


	let userOrder = document.createElement("p");
	let userGreeting = `Thank you ${userName}! We appreciate your interest in ${userInterest}. Your favorite coffee flavor is ${userFlavor} and your comments are ${userComment}. We will soon contact you at ${userEmail} or ${userNumber}.`;

	userOrder.textContent = userGreeting;
	message.appendChild(userOrder);

	form.style.display = 'none'; //hide the form

	coffeeList.push(dataObject); //push data to an array
	console.log(coffeeList); //show list in console
	console.log(dataObject); //Show the data object in the console
	form.reset(); //Reset the form
}

form.addEventListener("submit", coffeeForm);