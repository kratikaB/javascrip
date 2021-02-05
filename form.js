function validateForm() {
	var x=document.forms["myform"]["fullname"].value;
	// var reg = /^[a-zA-Z\s]+$/;
	if (!/^[a-zA-Z\s]+$/.test(x))
	{	 
		document.getElementById("validate_name").innerHTML = "full name must be Enter";
		return true;
	}
	


 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myform.email.value))
  {
    return true;
  }
  else{
      document.getElementById("validate_email").innerHTML=" write your email correctly";
      return false;
  }
 /*var p=document.forms["myform"]["password"].value;
if(/^[A-Za-z]\w{7,14}$/.match(p)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}*/


}

