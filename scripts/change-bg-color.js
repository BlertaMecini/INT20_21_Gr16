
/*Change background color on different times of the day */

var time = new Date().getHours();
if (time>=6 && time< 12) {
    document.body.style.backgroundColor="#ffffff";
    console.log("Have a good morning!");
} else if (time >= 12 && time<19)  {
  
    document.body.style.backgroundColor="#e8e6e1";
    console.log("Have a good day!");
} else  {
  
    document.body.style.backgroundColor="#bdbdbd";
    console.log("Have a good night!");
}


