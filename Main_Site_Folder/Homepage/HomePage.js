//This calls the heading method that has an array of headings used for displaying the names of the bikes (JU)
//when the user examines the bikes information (JU)
headingMethod();

//////////////////////////////////////////////////////////////
///////////////////////////SideBar function////////////////////
//////////////////////////////////////////////////////////////

/*START OF SIDE BAR: Reference: https://codepen.io/andgatjens/pen/XWJPddE (RS) */
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
$(".containerBike").on('click',function(){
    $(this).children(".overlayBike").toggleClass("show");
});
/*END OF SIDE BAR: Reference: https://codepen.io/andgatjens/pen/XWJPddE (RS)*/


//////////////////////////////////////////////////////////////
///////////////////////////Cart Overlay///////////////////////////
//////////////////////////////////////////////////////////////

//This code is used to display the items but once the user clicks outside, the overlay turns off - Reference: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_overlay_text (JU)             
function cartOn() {
	//This turns on overlay (JU)
	document.getElementById("overlay").style.display = "block";
}
// This code is used to display the items but once the user clicks outside, the overlay turns off - Reference: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_overlay_text (JU)       
function cartOff() {
	//This disables overlay (JU)
	document.getElementById("overlay").style.display = "none";
}

//This block of code displays the default sum value of 0 and the empty cart message in the cart overlay (JU)
let sum = 0;
document.getElementById("sum").innerHTML = sum;
document.getElementById("emptyCartInfo").innerHTML = "This is empty at the moment, please add to the cart";



//////////////////////////////////////////////////////////////
///////////////////////////Array Heading Function/////////////
//////////////////////////////////////////////////////////////

//This function displays the different bike headings when you click on a given bike for more information (JU)
function headingMethod()
{
	//Declare and assigns an array of bike headings (JU)
	let headingList = ["Carrera Road Bike", "Boardman CXR 8.9 Cyclocross Bike", "Boardman ADV 9.0 Road Bike", "Carrera Crossfuse Electric Hybrid Bike", "Vitesse Wave Electric Bike", "Assist Crossbar Hybrid Electric Bike", "Carrera Vengeance Mountain Bike", "Boardman MTR 8.8 Mountain Bike", "Apollo Phaze Mens Mountain Bike"];
	
	//Displays the headings within the different bike info overlays (JU)
	document.getElementById("BikeHeading1").innerHTML = headingList[0];
	document.getElementById("BikeHeading2").innerHTML = headingList[1]; 
	document.getElementById("BikeHeading3").innerHTML = headingList[2]; 
	document.getElementById("BikeHeading4").innerHTML = headingList[3]; 
	document.getElementById("BikeHeading5").innerHTML = headingList[4]; 
	document.getElementById("BikeHeading6").innerHTML = headingList[5]; 
	document.getElementById("BikeHeading7").innerHTML = headingList[6]; 
	document.getElementById("BikeHeading8").innerHTML = headingList[7]; 
	document.getElementById("BikeHeading9").innerHTML = headingList[8]; 
	 
}


//////////////////////////////////////////////////////////////
///////////////////////////AddToCart Functions///////////////////////////
//////////////////////////////////////////////////////////////

//Functions - adds items to cart - this was demonstrated in lab Week 21 - Arrays and Web Storage(JU)
function addToCart1()
{
	//Stores the value from the input box (JU)
	let qty1 = document.getElementById("i1").value;
	
	//Checks if quantity typed is less than 0, if so display message (JU)
	if(qty1 <= 0)
	{
		alert("Quantity can't be 0");
	
	}else //else store the items (JU)
	{
		//This block of code stores the bike and performs a calculation that gets added to the sum total (JU)
		sessionStorage.setItem("product1", "Carrera Road Bike");
		let total1 = (540.00 * qty1);
		sum += total1;

		
		//This block of code stores the price and quantity and retrieves the information (JU)
		sessionStorage.setItem("price1", "€" + total1);
		sessionStorage.setItem("qty1", qty1);
		alert("Carrera Road Bike added to cart");
		let product1 = sessionStorage.getItem("product1");
		let price1 = sessionStorage.getItem("price1");
		let quantity1 = sessionStorage.getItem("qty1");
		
		//This block of code gets displayed in the cart overlay (JU)
		document.getElementById("qty1").innerHTML = quantity1;
		document.getElementById("bike1").innerHTML = product1;
		document.getElementById("price1").innerHTML = price1;
		document.getElementById("sum").innerHTML = sum;
		document.getElementById("qtyName1").innerHTML = " (Quantity) ";					
	}	
}

//The code for all other addToCart functions from lines 107 to 355 works the same way outside of naming of variables and ids (JU)
function addToCart2()
{
	let qty2 = document.getElementById("i2").value;
	
	if(qty2 <= 0)
	{
		alert("Quantity can't be 0");
	
	}else
	{
		sessionStorage.setItem("product2", "Boardman CXR 8.9 Cyclocross Bike");
		let total2 = (1320.00 * qty2);
		sum += total2;
		

		sessionStorage.setItem("price2", "€" + total2);
		sessionStorage.setItem("qty2", qty2);
		alert("Boardman CXR 8.9 Cyclocross Bike added to cart");
		let product2 = sessionStorage.getItem("product2");

		let price2 = sessionStorage.getItem("price2");
		let quantity2 = sessionStorage.getItem("qty2");
		
		document.getElementById("qty2").innerHTML = quantity2;
		document.getElementById("bike2").innerHTML = product2;
		document.getElementById("price2").innerHTML = price2;
		document.getElementById("sum").innerHTML = sum;
		document.getElementById("qtyName2").innerHTML = " (Quantity) ";

	}		
}
function addToCart3()
{
	let qty3 = document.getElementById("i3").value;
	
	if(qty3 <= 0)
	{
		alert("Quantity can't be 0");
	
	}else
	{
		sessionStorage.setItem("product3", "Boardman ADV 9.0 Road Bike");
		let total3 = (2160.00 * qty3);
		sum += total3;
		

		sessionStorage.setItem("price3", "€" + total3);
		sessionStorage.setItem("qty3", qty3);
		alert("Boardman ADV 9.0 Road Bike added to cart");
		let product3 = sessionStorage.getItem("product3");
		let price3 = sessionStorage.getItem("price3");
		
		let quantity3 = sessionStorage.getItem("qty3");
		document.getElementById("qty3").innerHTML = quantity3;
		
		document.getElementById("bike3").innerHTML = product3;
		document.getElementById("price3").innerHTML = price3;
		document.getElementById("sum").innerHTML = sum;
		document.getElementById("qtyName3").innerHTML = " (Quantity) ";

	}	
	
}
function addToCart4()
{
	let qty4 = document.getElementById("i4").value;
	
	if(qty4 <= 0)
	{
		alert("Quantity can't be 0");
	
	}else
	{
		sessionStorage.setItem("product4", "Carrera Crossfuse Electric Hybrid Bike");
		let total4 = (2279.00 * qty4);
		sum += total4;
		

		sessionStorage.setItem("price4", "€" + total4);
		sessionStorage.setItem("qty4", qty4);
		alert("Carrera Crossfuse Electric Hybrid Bike added to cart");
		let product4 = sessionStorage.getItem("product4");
		let price4 = sessionStorage.getItem("price4");
		
		let quantity4 = sessionStorage.getItem("qty4");
		document.getElementById("qty4").innerHTML = quantity4;

		document.getElementById("bike4").innerHTML = product4;
		document.getElementById("price4").innerHTML = price4;
		document.getElementById("sum").innerHTML = sum;
		document.getElementById("qtyName4").innerHTML = " (Quantity) ";

	}	
}
function addToCart5()
{
	let qty5 = document.getElementById("i5").value;
	
	if(qty5 <= 0)
	{
		alert("Quantity can't be 0");
	
	}else
	{
		sessionStorage.setItem("product5", "Vitesse Wave Electric Bike");
		let total5 = (1799.00 * qty5);
		sum += total5;
		

		sessionStorage.setItem("price5", "€" + total5);
		sessionStorage.setItem("qty5", qty5);
		alert("Vitesse Wave Electric Bike added to cart");
		let product5 = sessionStorage.getItem("product5");
		let price5 = sessionStorage.getItem("price5");
		
		let quantity5 = sessionStorage.getItem("qty5");
		document.getElementById("qty5").innerHTML = quantity5;

		document.getElementById("bike5").innerHTML = product5;
		document.getElementById("price5").innerHTML = price5;
		document.getElementById("sum").innerHTML = sum;
		document.getElementById("qtyName5").innerHTML = " (Quantity) ";

	}	
}
function addToCart6()
{
	let qty6 = document.getElementById("i6").value;
	
	if(qty6 <= 0)
	{
		alert("Quantity can't be 0");
	
	}else
	{
		sessionStorage.setItem("product6", "Assist Crossbar Hybrid Electric Bike");
		let total6 = (775.00 * qty6);
		sum += total6;
		

		sessionStorage.setItem("price6", "€" + total6);
		sessionStorage.setItem("qty6", qty6);
		alert("Assist Crossbar Hybrid Electric Bike added to cart");
		let product6 = sessionStorage.getItem("product6");
		let price6 = sessionStorage.getItem("price6");
		
		let quantity6 = sessionStorage.getItem("qty6");
		document.getElementById("qty6").innerHTML = quantity6;

		document.getElementById("bike6").innerHTML = product6;
		document.getElementById("price6").innerHTML = price6;
		document.getElementById("sum").innerHTML = sum;
		document.getElementById("qtyName6").innerHTML = " (Quantity) ";

	}	
}
function addToCart7()
{
	let qty7 = document.getElementById("i7").value;
	
	if(qty7 <= 0)
	{
		alert("quantity can't be 0");
	
	}else
	{
		sessionStorage.setItem("product7", "Carrera Vengeance Mountain Bike");
		let total7 = (420.00 * qty7);
		sum += total7;
		

		sessionStorage.setItem("price7", "€" + total7);
		sessionStorage.setItem("qty7", qty7);
		alert("Carrera Vengeance Mountain Bike added to cart");
		let product7 = sessionStorage.getItem("product7");
		let price7 = sessionStorage.getItem("price7");
		
		let quantity7 = sessionStorage.getItem("qty7");
		document.getElementById("qty7").innerHTML = quantity7;

		document.getElementById("bike7").innerHTML = product7;
		document.getElementById("price7").innerHTML = price7;
		document.getElementById("sum").innerHTML = sum;
		document.getElementById("qtyName7").innerHTML = " (Quantity) ";

	}	
}
function addToCart8()
{
	let qty8 = document.getElementById("i8").value;
	
	if(qty8 <= 0)
	{
		alert("Quantity can't be 0");
	
	}else
	{
		sessionStorage.setItem("product8", "Boardman MTR 8.8 Mountain Bike");
		let total8 = (1740.00 * qty8);
		sum += total8;
		

		sessionStorage.setItem("price8", "€" + total8);
		sessionStorage.setItem("qty8", qty8);
		alert("Boardman MTR 8.8 Mountain Bike added to cart");
		let product8 = sessionStorage.getItem("product8");
		let price8 = sessionStorage.getItem("price8");
		
		let quantity8 = sessionStorage.getItem("qty8");
		document.getElementById("qty8").innerHTML = quantity8;

		document.getElementById("bike8").innerHTML = product8;
		document.getElementById("price8").innerHTML = price8;
		document.getElementById("sum").innerHTML = sum;
		document.getElementById("qtyName8").innerHTML = " (Quantity) ";

	}	
}
function addToCart9()
{
	let qty9 = document.getElementById("i9").value;
	
	if(qty9 <= 0)
	{
		alert("Quantity can't be 0");
	
	}else
	{
		sessionStorage.setItem("product9", "Apollo Phaze Mens Mountain Bike");
		let total9 = (228.00 * qty9);
		sum += total9;
		

		sessionStorage.setItem("price9", "€" + total9);
		sessionStorage.setItem("qty9", qty9);
		alert("Apollo Phaze Mens Mountain Bike added to cart");
		let product9 = sessionStorage.getItem("product9");
		let price9 = sessionStorage.getItem("price9");
		
		let quantity9 = sessionStorage.getItem("qty9");
		document.getElementById("qty9").innerHTML = quantity9;

		document.getElementById("bike9").innerHTML = product9;
		document.getElementById("price9").innerHTML = price9;
		document.getElementById("sum").innerHTML = sum;
		document.getElementById("qtyName9").innerHTML = " (Quantity) ";

	}	
}

//////////////////////////////////////////////////////////////
///////////////////////////Other Functions///////////////////////////
//////////////////////////////////////////////////////////////

//This checks which addToCart button was pressed and then adds the item to cart (JU)
function check(number) {

	//Checks which number was passed in, and then calls a particular addToCart method (JU)
	//The alerts below were used for testing purposes to see if the correct button was clicked (JU)
	if(number == 1)
	{
		//alert("Box " + number + " has been clicked");
		addToCart1();

	}else if(number == 2)
	{
		//alert("Box " + number + " has been clicked");
		addToCart2();

	}else if(number == 3)
	{
		//alert("Box " + number + " has been clicked");
		addToCart3();

	}	else if(number == 4)
	{
		//alert("Box " + number + " has been clicked");
		addToCart4();

	}	else if(number == 5)
	{
		//alert("Box " + number + " has been clicked");
		addToCart5();

	}	else if(number == 6)
	{
		//alert("Box " + number + " has been clicked");
		addToCart6();

	}	else if(number == 7)
	{
		//alert("Box " + number + " has been clicked");
		addToCart7();

	}	else if(number == 8)
	{
		//alert("Box " + number + " has been clicked");
		addToCart8();

	}	else if(number == 9)
	{
		//alert("Box " + number + " has been clicked");
		addToCart9();

	}		
}

//This function sends user to checkout and stores sum total (JU)
function checkout() {
	//This alert was used for testing to see if the method was activated (JU)
	//alert("Checkout has been clicked");
	window.location.href="../Payment/Payment.html";
	sessionStorage.setItem("sum", sum);	
}


//This function makes the following string visible or invisible depending on whether quantity is greater or equal to 0 (JU)
//This code was taken from https://www.w3schools.com/css/tryit.asp?filename=trycss_display (JU)
function changeVisibility()
{
	//Checks if the sum is greater than 0 (JU)
	//If so, make the message an empty/invisible string (JU)
	//Else display the empty cart message (JU)
	if(sum > 0){
		document.getElementById("emptyCartInfo").innerHTML = "";
	}else{
		document.getElementById("emptyCartInfo").innerHTML = "This is empty at the moment, please add to the cart";
	}
	
}

//This function is called when user resets cart - setting sum to 0 and emptying the cart of items (JU)
function ridOfContents()
{
	//Displays empty message (JU)
	document.getElementById("emptyCartInfo").innerHTML = "This is empty at the moment, please add to the cart";

	//The below code from lines 445 to 479 sets the items in session storage to be empty (JU)
	product1 = sessionStorage.setItem("product1","");
	price1 = sessionStorage.setItem("price1","");
	qty1 = sessionStorage.setItem("qty1","");

	product2 = sessionStorage.setItem("product2","");
	price2 = sessionStorage.setItem("price2","");
	qty2 = sessionStorage.setItem("qty2","");

	product3 = sessionStorage.setItem("product3","");
	price3 = sessionStorage.setItem("price3","");
	qty3 = sessionStorage.setItem("qty3","");
	
	product4 = sessionStorage.setItem("product4","");
	price4 = sessionStorage.setItem("price4","");
	qty4 = sessionStorage.setItem("qty4","");

	product5 = sessionStorage.setItem("product5","");
	price5 = sessionStorage.setItem("price5","");
	qty5 = sessionStorage.setItem("qty5","");
	
	product6 = sessionStorage.setItem("product6","");
	price6 = sessionStorage.setItem("price6","");
	qty6 = sessionStorage.setItem("qty6","");

	product7 = sessionStorage.setItem("product7","");
	price7 = sessionStorage.setItem("price7","");
	qty7 = sessionStorage.setItem("qty7","");
	
	product8 = sessionStorage.setItem("product8","");
	price8 = sessionStorage.setItem("price8","");
	qty8 = sessionStorage.setItem("qty8","");
	
	product9 = sessionStorage.setItem("product9","");
	price9 = sessionStorage.setItem("price9","");
	qty9 = sessionStorage.setItem("qty9","");

	//The below code from lines 482 to 525 display the cart as empty (JU)
	document.getElementById("bike1").innerHTML = "";
	document.getElementById("price1").innerHTML = "";
	document.getElementById("qty1").innerHTML = "";
	document.getElementById("qtyName1").innerHTML = "";

	document.getElementById("bike2").innerHTML = "";
	document.getElementById("price2").innerHTML = "";
	document.getElementById("qty2").innerHTML = "";
	document.getElementById("qtyName2").innerHTML = "";

	document.getElementById("bike3").innerHTML = "";
	document.getElementById("price3").innerHTML = "";
	document.getElementById("qty3").innerHTML = "";
	document.getElementById("qtyName3").innerHTML = "";

	document.getElementById("bike4").innerHTML = "";
	document.getElementById("price4").innerHTML = "";
	document.getElementById("qty4").innerHTML = "";
	document.getElementById("qtyName4").innerHTML = "";

	document.getElementById("bike5").innerHTML = "";
	document.getElementById("price5").innerHTML = "";
	document.getElementById("qty5").innerHTML = "";
	document.getElementById("qtyName5").innerHTML = "";

	document.getElementById("bike6").innerHTML = "";
	document.getElementById("price6").innerHTML = "";
	document.getElementById("qty6").innerHTML = "";
	document.getElementById("qtyName6").innerHTML = "";

	document.getElementById("bike7").innerHTML = "";
	document.getElementById("price7").innerHTML = "";
	document.getElementById("qty7").innerHTML = "";
	document.getElementById("qtyName7").innerHTML = "";

	document.getElementById("bike8").innerHTML = "";
	document.getElementById("price8").innerHTML = "";
	document.getElementById("qty8").innerHTML = "";
	document.getElementById("qtyName8").innerHTML = "";

	document.getElementById("bike9").innerHTML = "";
	document.getElementById("price9").innerHTML = "";
	document.getElementById("qty9").innerHTML = "";
	document.getElementById("qtyName9").innerHTML = "";
	
	//This block of code sets the sum to 0 and displays the value in the cart (JU)
	sum = 0;
	document.getElementById("sum").innerHTML = sum;
	
	//Tells user contents have been cleared (JU)
	alert("Contents have been cleared");
}

/*Scroll user to bikes (RS)*/
function scrollDown() {
	window.scrollBy(0, 50000);
}