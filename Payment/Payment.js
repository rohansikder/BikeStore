//This function is called at the start to display any cart information that was stored in sessionStorage (JU)
displayInfo();

/////////////////////////////////////
//////////Event Listeners/////////////
////////////////////////////////////

//This listens out for when the user clicks on the home button (JU)
//Then it calls the backHome function (JU)
document.getElementById("Home").addEventListener("click",backHome);

//This listens out for when the user clicks on the add voucher button (JU)
//Then it calls the addVoucherMethod (JU)
document.getElementById("voucherBtn").addEventListener("click",addVoucherMethod);


////////////////////////////////////////////////////////////////////////////////
///////////////////////////Display Sum, Keeping Track of Count Variables//////////
/////////////////////// and Display Empty Cart Message ////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

//This retrieves the item from sessionStorage and stores it into a sum variable(JU)
let sum = sessionStorage.getItem("sum");

//Displays the stored sum on payment page(JU)
document.getElementById("sum").innerHTML = sum;

//These are count variables used to keep track if a voucher was used previously so as not to use it again (JU)
//The default values for each variable is set to 0 (JU)
let jjrCount = 0;
let qdfCount = 0;
let werCount = 0;

//This calls the changeVisibility function which shows a message saying the cart is empty (JU)
//If the cart is not empty, it the message turns invisible (JU)
changeVisibility();


/////////////////////////////////////
//////////Important Functions////////
////////////////////////////////////

//Function for button to redirect back to home page (RS,JU)
function backHome() 
{
    //This rids of the contents of the cart (JU)
    ridOfContents();

    //This brings user back to homepage (RS)
    window.location.assign("../index.html");
	
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

//This function displays stored cart information (JU)(RS)
function displayInfo()
{
    //The code below from lines 73 to 107 retrieves items from session storage (JU)
    let product1 = sessionStorage.getItem("product1");
    let price1 = sessionStorage.getItem("price1");
    let qty1 = sessionStorage.getItem("qty1");

    let product2 = sessionStorage.getItem("product2");
    let price2 = sessionStorage.getItem("price2");
    let qty2 = sessionStorage.getItem("qty2");

    let product3 = sessionStorage.getItem("product3");
    let price3 = sessionStorage.getItem("price3");
    let qty3 = sessionStorage.getItem("qty3");
    
    let product4 = sessionStorage.getItem("product4");
    let price4 = sessionStorage.getItem("price4");
    let qty4 = sessionStorage.getItem("qty4");

    let product5 = sessionStorage.getItem("product5");
    let price5 = sessionStorage.getItem("price5");
    let qty5 = sessionStorage.getItem("qty5");
    
    let product6 = sessionStorage.getItem("product6");
    let price6 = sessionStorage.getItem("price6");
    let qty6 = sessionStorage.getItem("qty6");

    let product7 = sessionStorage.getItem("product7");
    let price7 = sessionStorage.getItem("price7");
    let qty7 = sessionStorage.getItem("qty7");
    
    let product8 = sessionStorage.getItem("product8");
    let price8 = sessionStorage.getItem("price8");
    let qty8 = sessionStorage.getItem("qty8");
    
    let product9 = sessionStorage.getItem("product9");
    let price9 = sessionStorage.getItem("price9");
    let qty9 = sessionStorage.getItem("qty9");

    //The code below from lines 110 to 175 displays info on screen(JU)  
	//The if statements check if the qty is greater than 0, if so then the word "Quantity" will appear in paranthesis beside the item (JU)
    document.getElementById("bike1").innerHTML = product1;
    document.getElementById("price1").innerHTML = price1;
    document.getElementById("qty1").innerHTML = qty1;
    if(qty1 > 0){
        document.getElementById("qtyName1").innerHTML = " (Quantity) ";
    }


    document.getElementById("bike2").innerHTML = product2;
    document.getElementById("price2").innerHTML = price2;
    document.getElementById("qty2").innerHTML = qty2;
    if(qty2 > 0){
        document.getElementById("qtyName2").innerHTML = " (Quantity) ";
    }
    

    document.getElementById("bike3").innerHTML = product3;
    document.getElementById("price3").innerHTML = price3;
    document.getElementById("qty3").innerHTML = qty3;
    if(qty3 > 0){
        document.getElementById("qtyName3").innerHTML = " (Quantity) ";
    }
    

    document.getElementById("bike4").innerHTML = product4;
    document.getElementById("price4").innerHTML = price4;
    document.getElementById("qty4").innerHTML = qty4;
    if(qty4 > 0){
        document.getElementById("qtyName4").innerHTML = " (Quantity) ";
    }
    
    document.getElementById("bike5").innerHTML = product5;
    document.getElementById("price5").innerHTML = price5;
    document.getElementById("qty5").innerHTML = qty5;
    if(qty5 > 0){
        document.getElementById("qtyName5").innerHTML = " (Quantity) ";
    }
    
    document.getElementById("bike6").innerHTML = product6;
    document.getElementById("price6").innerHTML = price6;
    document.getElementById("qty6").innerHTML = qty6;
    if(qty6 > 0){
        document.getElementById("qtyName6").innerHTML = " (Quantity) ";
    }
    

    document.getElementById("bike7").innerHTML = product7;
    document.getElementById("price7").innerHTML = price7;
    document.getElementById("qty7").innerHTML = qty7;
    if(qty7 > 0){
        document.getElementById("qtyName7").innerHTML = " (Quantity) ";
    }
    
    document.getElementById("bike8").innerHTML = product8;
    document.getElementById("price8").innerHTML = price8;
    document.getElementById("qty8").innerHTML = qty8;
    if(qty8 > 0){
        document.getElementById("qtyName8").innerHTML = " (Quantity) ";
    }

    document.getElementById("bike9").innerHTML = product9;
    document.getElementById("price9").innerHTML = price9;
    document.getElementById("qty9").innerHTML = qty9;
    if(qty9 > 0){
        document.getElementById("qtyName9").innerHTML = " (Quantity) ";
    }

}


//This function gets rid of any contents from the cart and sets sum to 0 (JU,RS)
function ridOfContents()
{
	//Displays empty cart message (JU) 
    document.getElementById("emptyCartInfo").innerHTML = "This is empty at the moment, please add to the cart";
	
    //Lines 188 to 222 sets the values of items in session storage as blank so as to empty the cart (JU)
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
    
	//Lines 225 to 268 displays the cart as empty (JU)
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
    
	//This block of code sets the sum total to 0 and displays the value in the cart(JU)
    sum = 0;
	document.getElementById("sum").innerHTML = sum;
    
    //This Showed us if the voucher was working with the correct amount being detected(RS)
    //alert("Contents have been cleared");
    //alert("Sum is " + sum);
}


//This method adds a voucher discount to the list of items (JU)
function addVoucherMethod()
{
    let voucherList = ["JJR","QDF","WER"];
    let voucher = document.getElementById("voucher").value;
	let discount;
	
	//Checks if voucher box is empty, if so continue on to check if a voucher can be added (JU)
	if(voucher != "")
	{				
		//Checks if the code that the the user typed into the box is the same as the value stored in the array (JU)
        //Also checks if the voucher has been used before and if so, cannot be used again (JU)				
        //The before and after sum alerts were used to test if the calculations for the voucher discounts worked (JU)	
		if(voucher == voucherList[0] && jjrCount == 0)
		{
			alert("JJR Voucher has been added");
			//alert("The Before Sum is " + sum);
			//Add a 10% discount
			discount = (0.1 * sum);	
			jjrCount++;
			sum -= discount;
			document.getElementById("sum").innerHTML = sum;
			//alert("The After Sum is " + sum);
		}else if(voucher == voucherList[1] && qdfCount == 0)
		{
			alert("QDF Voucher has been added");
			//alert("The Before Sum is " + sum);
			//Add a 15% discount
			discount = (0.15 * sum);	
			qdfCount++;
			sum -= discount;
			document.getElementById("sum").innerHTML = sum;
			//alert("The After Sum is " + sum);
		}else if(voucher == voucherList[2] && werCount == 0)
		{
			alert("WER Voucher has been added");
			//alert("The Before Sum is " + sum);
			//Add a 20% discount
			discount = (0.2 * sum);	
			werCount++;
			sum -= discount;
			document.getElementById("sum").innerHTML = sum;
			//alert("The After Sum is " + sum);
		}else if(jjrCount > 0 && voucher == voucherList[0])
		{
			alert("The JJR Voucher Code was already added, please insert a different voucher");
			
		}else if(qdfCount > 0 && voucher == voucherList[1])
		{
			alert("The QDF Voucher Code was already added, please insert a different voucher");
			
		}else if(werCount > 0 && voucher == voucherList[2])
		{
			alert("The WER Voucher Code was already added, please insert a different voucher");
			
		}else if(voucher != voucherList[0] || voucher != voucherList[1] || voucher != voucherList[2])
		{
			alert("Incorrect Voucher Code, please try again.");
			
		}
										
	}else //Else message pops up saying no voucher was detected (JU)
	{
		alert("No Voucher Code detected\nPlease insert a voucher code above to add a discount");
	}
	
    
}

/*Takes all information from the payment page (RS,JU)*/
function store()
{	
	//Assigns the values for the payment page into variables (RS) 
	let firstName = document.getElementById("fname").value;
	let lastName = document.getElementById("lname").value;
	let email = document.getElementById("email").value;
	let address = document.getElementById("adr").value;
	let town = document.getElementById("Town").value;
    let county = document.getElementById("County").value;
	let eir = document.getElementById("Eir").value;
	let name = document.getElementById("cname").value;
	let ccnum = document.getElementById("ccnum").value;
	let expiryMonth = document.getElementById("expmonth").value;
    let expiryYear = document.getElementById("expyear").value;
	let cvv = document.getElementById("cvv").value;
	
    //Showed us that function was working but for debugging(RS)
	//alert("Complete Transaction has been clicked!");
	
	//Stores the items in session storage and displays a message to thank the user (RS)
	sessionStorage.setItem("firstNameValue",firstName);
	sessionStorage.setItem("lastNameValue",lastName);
	sessionStorage.setItem("emailValue",email);
	sessionStorage.setItem("addressValue",address);
	sessionStorage.setItem("townValue",town);
    sessionStorage.setItem("countyValue",county);
	sessionStorage.setItem("eirValue",eir);
	sessionStorage.setItem("nameValue",name);
	sessionStorage.setItem("ccnumValue",ccnum);
	sessionStorage.setItem("expiryMonthValue",expiryMonth);
    sessionStorage.setItem("expiryYearValue",expiryYear);
	sessionStorage.setItem("cvvValue",cvv);
	alert("Transaction Complete!");	
    alert("Thank You for shopping at JJR Bikes, Your order will be with you in 3 to 5 Business days");
	
	//This method is called to remove items from the cart after transaction is completed (JU)
	ridOfContents();
	
}//End of store method