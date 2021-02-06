function validate_fullname() {
	var x=document.forms["myform"]["fullname"].value;
	// var reg = /^[a-zA-Z\s]+$/;
	if (!/^[a-zA-Z\s]+$/.test(x))
	{	 
		document.getElementById("validate_name").innerHTML = "full name must be Enter";
		return true;
	}
	
}

function validate_Email(){
	 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myform.email.value))
	  {
	    return true;
	  }
	  else{
	      document.getElementById("validate_email").innerHTML=" write your email correctly";
	      return false;

}
}
/*function main()
{
	validate_Email();
	validate_fullname();
}
function onsubmit()
{
	main();
}
*/




