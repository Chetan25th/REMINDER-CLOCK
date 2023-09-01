function clock() {
    
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
  
    if (hours > 12) {
      hours = hours - 12;
    }
  
   
    
    let hrs = document.getElementById("Hour");
    hrs.innerHTML = hours;
    let mins = document.getElementById("Minute");
    mins.innerHTML = minutes;
    let secs = document.getElementById("Second");
    secs.innerHTML = seconds;
  }
  setInterval(() => {
    clock();
  }, 1000);
  
  function rest() {
    let date = new Date(); 
    let hours = date.getHours();
  
    if (hours >= 12) {
      let ampm = document.getElementById("AMPM");
      ampm.innerText = "PM";
    } else if (hours < 12) {
      let ampm = document.getElementById("AMPM");
      ampm.innerHTML = "AM";
    }
  
    let greeting = document.getElementById("ChangeMessage");
  
    if (hours >= 12 && hours < 16) {
      greeting.innerHTML = "GOOD AFTERNOON!!";
    }
    if (hours >= 16 && hours < 17) {
      greeting.innerHTML = "GOOD EVENING!!";
    }
    if (hours >= 17 && hours < 22) {
      greeting.innerHTML = "GOOD NIGHT!!";
    }
  
    let button = document.getElementById("Alarm_Btn");
    button.addEventListener("mouseover", function () {
      this.innerText = "Party time";
    });
    button.addEventListener("mouseout", function () {
      this.innerText = "Set Alarm";
    });
  
    button.addEventListener("click", function () {
      let date = new Date();
      let hours = date.getHours();
  
      let WAKETIME = document.getElementById("WAKETIME");
      let LUNCHTIME = document.getElementById("LUNCHTIME");
      let NAPTIME = document.getElementById("NAPTIME");
      let NIGHTIME = document.getElementById("NIGHTIME");
  
      if (parseInt(WAKETIME.value) === hours) {
       
        document.getElementById("ChangeMessage2").innerHTML =
          "GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById("Reminder_Post").src = "./WakeUptime.svg"; 
  
      }
       else if (parseInt(LUNCHTIME.value) === hours) {
        document.getElementById("ChangeMessage2").innerHTML = "LET'S HAVE SOME LUNCH";
        document.getElementById("Reminder_Post").src = "./Lunchtime.svg";
      } 
      else if (parseInt(NAPTIME.value) === hours) {
        document.getElementById("ChangeMessage2").innerHTML =
          "STOP YAWNING, GET SOME TEA.. IT'S JUST EVENING";
        document.getElementById("Reminder_Post").src = "./Tea Image.png";
      }
       else if (parseInt(NIGHTIME.value) === hours) {
        document.getElementById("ChangeMessage2").innerHTML =
          "CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("Reminder_Post").src = "./Nighttime.svg";
      }
  
  let Timing = document.getElementsByClassName("Timing");
  
      Timing[0].innerText = WAKETIME.options[WAKETIME.selectedIndex].text;
      Timing[1].innerText = LUNCHTIME.options[LUNCHTIME.selectedIndex].text;
      Timing[2].innerText = NAPTIME.options[NAPTIME.selectedIndex].text;
      Timing[3].innerText = NIGHTIME.options[NIGHTIME.selectedIndex].text;
    });
  }
  
  setInterval(() => {
    rest();
  }, 1000);
  
  