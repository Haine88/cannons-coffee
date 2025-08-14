let form = document.querySelector("form");
let greeting = document.querySelector(".message-container");
console.log(greeting);
let coffeeList = [];


function userInfoForm() {
	event.preventDefault(); //Prevent default behavior
	const data = new FormData(event.target); //Collect the data from the form
	const dataObject = Object.fromEntries(data.entries()); //Create the data object
	
	let userName = dataObject.username;

	let userInfo = document.createElement("p");
	let userGreeting = `Welcome, ${userName}! You are logged in!`

	userInfo.textContent = userGreeting;
	greeting.appendChild(userInfo);

	coffeeList.push(dataObject); //push data to an array
	console.log(coffeeList); //show list in console
	console.log(dataObject); //Show the data object in the console
	form.reset(); //Reset the form
}

form.addEventListener("submit", userInfoForm);