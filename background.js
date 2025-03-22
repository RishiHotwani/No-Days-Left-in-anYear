setInterval(() => {
    updateTime();
  }, 1000);
  
  function updateTime() {
     const timeElement = document.getElementById("time");
     const dateElement = document.getElementById("date");
  
     const now = new Date();
  
     const targetDate = new Date("December 31, 2025 23:59:59").getTime();
     const difference = targetDate - now.getTime();
  
     if (difference <= 0) {
         timeElement.innerText = "🎉 Happy New Year 2026!";
         return;
     }
  
     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
     const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
     timeElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
  
  updateTime();