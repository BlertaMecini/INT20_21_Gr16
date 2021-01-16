
/*Change background color on different times of the day */

var time = new Date().getHours();
if (time>=6 && time< 12) {
    console.log("Have a good morning!");
    document.body.style.backgroundColor="#ffffff";
} else if (time >= 12 && time<19)  {
    console.log("Have a good day!");
    document.body.style.backgroundColor="#e8e6e1";
} else if (time>=19 && time<6){
    console.log("Have a good night!");
    document.body.style.backgroundColor="#bdbdbd";
}
