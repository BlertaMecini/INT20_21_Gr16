
function showTime()
{
var today=new Date();
var hours=today.getHours();
var minutes=today.getMinutes();
var seconds=today.getSeconds();

minutes=checkTime(minutes);
seconds=checkTime(seconds);
document.getElementById('time').innerHTML=hours+":"+minutes+":"+seconds;
t=setTimeout(function(){showTime()},1000);
}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
} 
window.onload=showTime; 



var day;
function weekday()
{
 
   switch(new Date().getDay())
   {
       case 0:
       day = "Sunday";
       break;
       case 1:
       day="Monday";
       break;
       case 2:
       day= "Tuesday";
       break;
       case 3:
       day="Wednesday";
       break;
       case 4:
       day = "Thursday";
       break;
       case 5:
       day = "Friday";
       break;
       case 6:
       day = "Saturday";
       break;
   }
   document.getElementById("day").innerHTML="Today is "+ day;
}

