/*form validation*/

function validate_form() {
  var x = document.getElementById("myemail").value;
    
    if (x == "") {
      alert("Email must be filled out!");
      return false;
    }

    var z = document.getElementById("myemail").value;
    var atpos=z.indexOf("@");
    var dotpos=z.lastIndexOf(".");
    if (atpos<0 || dotpos<atpos+1 || dotpos+1>=z.length)
      {
      alert("This is not a valid email!");
      return false; 
    } 

  var textbox = document.getElementById("message").value;

  if (textbox == "") {
    alert("Please fill the 'leave a message' box!");
    return false; 
      } 
    if(textbox.length <=10){

        alert("Make sure the input text is more than 10 characters long!");
        return false; 
    } 
    
    else 
    {
    alert("Thank you for leaving feedback!")
    return true ; 
    }
}



/*Canvas*/ 
var c = document.getElementById("mycanvas");
var ctx = c.getContext("2d");
ctx.font = "Arial 20px";
ctx.strokeStyle ="white";
ctx.color = "white";
ctx.moveTo(0,0);
ctx.lineTo(40,40);
ctx.lineTo(80,0);
ctx.stroke();
ctx.strokeText("Leave Feedback",3,60);
