////////////////////////////
/////////Event Listeners/////
////////////////////////////

//event listener invokes the login function when the login button is clicked.(JU)
//This code was demonstrated in a lab session in GUI Lab - Week 21 - Arrays and Web Storage (JU)
document.getElementById("loginBtn").addEventListener("click",login);

//This event listener invokes the registration function when the sign in button is clicked.(JU) 
document.getElementById("createAccBtn").addEventListener("click",create);


/////////////////////////////
/////////2D Array Lists//////
/////////////////////////////

//Declares an 2D Array that lists the different username's and passwords for login(RS,JU)
//This code was demonstrated in a lab session in GUI Lab - Week 21 - Arrays and Web Storage (RS,JU)
//Pre coded user names and password held in arrays (RS,JU)
let users = [["user1","pwd1"],["user2","pwd2"],["user3","pwd3"]];

//getting username and password form session storage and letting valid be a boolean (RS)
let userEmail = sessionStorage.getItem("emailValue");
let userPass = sessionStorage.getItem("passValue");
let valid = false;


//////////////////////////////////////////////
////////Login and Registration functions//////
//////////////////////////////////////////////

//This code checks if the user has the appropriate login details and if so, can proceed to homepage(JU)
//This code was demonstrated in a lab session in GUI Lab - Week 21 - Arrays and Web Storage (JU)
function login(){
	
	//This block of code takes the values in the input boxes for email and password and stores them into variables (JU)
	let email = document.getElementById("email").value;
	let passwrd = document.getElementById("pass").value;
	
	

	//This code reads the values from the input fields(JU,RS)	
	//if a match is found then go the main.html, otherwise popup an alert saying you invalid login(JU,RS)
	//This code was demonstrated in a lab session in GUI Lab - Week 21 - Arrays and Web Storage (JU,RS)
	for(let i = 0; i < users.length; i++)
	{
		if(email == users[i][0])
		{
			if(passwrd == users[i][1])
			{
				//This alert was used to test if the correct password was detected (JU)
				//alert("Correct Password!");
				valid = true;
				sessionStorage.setItem("userValue","user");
				sessionStorage.setItem("firstNameValue","guest");
				sessionStorage.setItem("lastNameValue","");
				sessionStorage.setItem("emailValue", users[i][0]);
				sessionStorage.setItem("passValue", users[i][1]);
				
			}else
			{
				alert("Wrong Password!");
			}
		}//End of if statement (JU)
	}//End of for loop (JU)

	//if email entered is same as email in session storage (RS)
	if (email == userEmail) 
	{
		//If password entered is same as passwrd in session storage (RS)
		if (passwrd == userPass) {
			
			//These alerts were used to show if the proper account information was used to sign in and to see if the correct password was used (JU)
			//alert(userEmail);
			//alert(userPass);
			//alert("Correct Password!");
			valid = true;
			
		}//Password does not match (RS)
		else{
			alert("Wrong Password!");
		}
	}
	
	//If valid is true, then allow access to shop file(JU,RS)
	//This code was demonstrated in a lab session in GUI Lab - Week 21 - Arrays and Web Storage (JU,RS)
	if(valid == true)
	{
		alert("Access Granted");//Alert to verify(RS)
		window.location.href="../index.html";//Brings user to homepage (RS)
		
	}else //if valid is false then login is invalid(JU) 
	{
		alert("Invalid Login");	//Alert to verify(RS)
	}
	
}

/*Bring user to registration page(RS) */
function create() {
	window.location.href="../Registration/Registration.html";
}