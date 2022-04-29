/*START OF SIDE BAR: Reference: https://codepen.io/andgatjens/pen/XWJPddE (RS) */
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});
/*END OF SIDE BAR: Reference: https://codepen.io/andgatjens/pen/XWJPddE (RS)*/

  /*Bringing in Session storage information about user (RS)*/
  let userName = sessionStorage.getItem("userValue");
  let userFirstName = sessionStorage.getItem("firstNameValue");
  let userLastName = sessionStorage.getItem("lastNameValue");
  let email = sessionStorage.getItem("emailValue");
  let pass = sessionStorage.getItem("passValue");

  //Displays the stored information on the page (JU)
  document.getElementById("userName").innerHTML = userName;
  document.getElementById("firstName").innerHTML = userFirstName;
  document.getElementById("lastName").innerHTML = userLastName;
  document.getElementById("email").innerHTML = email;
  document.getElementById("pass").innerHTML = pass;

  //This function is called so the user dosent immediately see their password (JU)
  //when they enter the profile page for the first time (JU)
  showPass();
  
  //Function to reveal users password when button is clicked (RS)
  function showPass() {
    var x = document.getElementById("showPass");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
