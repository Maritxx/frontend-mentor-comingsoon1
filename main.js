function pageHeight() {
	var headerHeight = document.getElementById('siteHeader').offsetHeight;
	//Sets a variable. Uses 'id' of the Header and takes that height.
	//offsetHeight returns the total amount of space an element occupies.

	var footerHeight = document.getElementById('siteFooter').offsetHeight;
	//Sets a variable. Returns the total height of the footer.

	var remainHeight = headerHeight + footerHeight;
	//Sets a variable that is the sum of the height of the footer and the header together.

	var pageContent = document.getElementById('pageContent');
	//Sets a variable that targets the 'wrapper' (holds all page content without header/footer).

	pageContent.style.minHeight = "calc(100vh - " + remainHeight + "px)";
	//Sets the min-height value of the wrapper div to be 100vh minus the height of the footer and header.
	//CSS styles are camel-cased in javascript.
}

pageHeight();
//Resets the pageHeight value.

window.addEventListener('resize', pageHeight);
//Makes the pageHeight calculation run when the window gets resized.






const validateEmail = (email) => {
   //Is a function expression, function is stored in variable.
   //The (email) is another variable (this is the id from input in HTML).
  
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
  //Checks if the string (stored in the email variable) matches the regular expression.
  //Returns the result (does it match, or does it not match? true or false)



const validate = () => {

  const result = document.getElementById('result');
  //Sets the variable 'result' (this is the id from the span that will show on invalid input).

  const email = document.getElementById('email').value;
  //Sets the variable 'email' and makes it so that it will return the submitted input from the form.

  result.innerHTML = '';
  //Unsets the value of the span.
  


  if (email == '') {
  	result.innerHTML = 'This field cannot be empty.';
  	//Adds a string. 

  	result.style.display="block";
  	//Sets the display of the span to block, making it visbible.

  	document.getElementById('email').style.marginTop = "36px";
  	//Sets a margin to the input, making it so the input and button are centered.

  } else if (validateEmail(email)) {
  //If the input matches the regular expression.
  
  result.style.display="none";
  //Sets the display of the span to 'none', making it invisible.

  document.getElementById('email').style.marginTop = "0px";
  //Removes the margin from the input.
  }

    else {
     result.innerHTML = email + ' is not valid a valid email address.';
     //Takes the value from email and adds string 'is not valid'. 

     result.style.display="block"; 
     //Sets the display of the span to block, making it visbible.

     document.getElementById('email').style.marginTop = "36px";
  	 //Sets a margin to the input, making it so the input and button are centered.
  }
  return false;
  //Makes it so the form does not submit when the email isn't formatted correctly.
}


const formButton = document.getElementById("formButton");
  //Sets variable for submit button of form.

formButton.addEventListener("click", validate);
//Makes it run the function 'validate' when submit button is clicked.
