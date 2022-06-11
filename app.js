const days = document.getElementById('days');
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const currentYear = new Date().getFullYear();
const ramaDhan = new Date (`Maret 22 ${currentYear + 1} 00:00:00`);

// Update Countdown

function updateCountdown() {
    const currentTime = new Date();
    const diff = ramaDhan - currentTime;

    const d = Math.floor(diff / 1000 /60 /60 /24);
    const h = Math.floor(diff / 1000 / 60 / 60)%24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
    
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h ;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
   
}

setInterval(updateCountdown, 1000)

// Popup
function openBox() {
  document.getElementById("myForm").style.display = "block";
}

//function to close popup
function closeBox() {
  document.getElementById("myForm").style.display = "none";
}