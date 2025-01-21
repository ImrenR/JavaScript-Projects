function updateClock(){
 
  const now = new Date();
  let hours = now.getHours().toString().padStart(2,0);
  const meridiem = hours >= 12 ? "PM" : "AM" ;
  hours = hours % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2,0);
  const seconds = now.getSeconds().toString().padStart(2,0);
  const timeString = `${hours}: ${minutes}: ${seconds}`;
  document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock,1000);