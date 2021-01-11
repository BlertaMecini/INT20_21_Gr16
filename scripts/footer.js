    
function validate_form ( )
{
    if ( document.contact_form.email.value == "" )
    {    valid = false;
        alert ( "Please enter your email!" );
      
    }
    if ( document.contact_form.message.value == "" )
    {  valid = false;
        alert ( 'Please fill the "Leave a Message" box!');
      
    }
else 
{  valid=true;
    alert("Thank you for leaving feedback!");
} 
}


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
