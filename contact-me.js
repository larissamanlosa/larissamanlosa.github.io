function ValidateForm(){
  var validName = false;
  var validEmail = false;
  var validMessage = false;


  var errorMessages ="";  // All the error messages are going to stay in this variable



/************* VALIDATES NAME ***********/
 if (myContact.name.value===null || myContact.name.value==="")
 errorMessages += "<p>Please provide your name.</p>";
  else
 validName =true;

 /************* VALIDATES EMAIL ***********/
 if (myContact.email.value===null || myContact.email.value==="")
 errorMessages += "<p>Please provide your email.</p>";
  else
 validEmail =true;

/************* VALIDATES MESSAGE ***********/

  if (myContact.commentbox.value===null || myContact.commentbox.value==="")
  errorMessages += "<p>Please enter your question or comment in the Message box.</p>";
  else
 validMessage =true;

 document.getElementById("errorMessages").innerHTML = errorMessages;

 return (validName && validEmail && validMessage) ;

}