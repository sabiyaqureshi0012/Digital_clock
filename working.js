let digitalClock = () =>{

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let am_pm = "AM"
  
    if (hours > 12) {
      hours = hours - 12; 
      am_pm = "PM";
    }

    if (hours === 0) {
      hours = 12;   
      am_pm = "AM" 
    }

    if(hours < 10) {
      hours = "0" + hours;
    }
  
    if(minutes < 10) {
      minutes = "0" + minutes;
    }        
    if(seconds < 10) {
      seconds = "0" + seconds;
    }

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("am_pm").innerHTML = am_pm;

    setTimeout(digitalClock, 500);


}

digitalClock();
