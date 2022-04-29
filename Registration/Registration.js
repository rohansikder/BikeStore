////////////////////////////////////////
////////Store function//////////////////
////////////////////////////////////////

//Setting inputs to variable and storing info into session storage(RS)
function store()
{	
	//Assigns the values for the Registration page into variables (RS) 
	let email = document.getElementById("email").value;
	let passwrd = document.getElementById("pass").value;
	let userName = document.getElementById("username").value;
	let firstName = document.getElementById("firstName").value;
	let lastName = document.getElementById("lastName").value;
	
	//This alert was used for testing to see if the method was working (JU)
	//alert("Submit has been clicked!");
	
	//Stores the items in session storage (RS)
	sessionStorage.setItem("emailValue",email);
	sessionStorage.setItem("passValue",passwrd);
	sessionStorage.setItem("userValue",userName);
	sessionStorage.setItem("firstNameValue",firstName);
	sessionStorage.setItem("lastNameValue",lastName);

	//This alert was used for testing to see if the method was working (JU)
	//alert("Information has been stored!");	
	
}//End of store method
