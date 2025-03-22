 
// Create a container for the countdown timer
const timerContainer = document.createElement('div');
timerContainer.id = 'timer-container';
timerContainer.textContent = "284d 11h 27m 30s"; // Placeholder text

// Apply styles to the timer container
timerContainer.style.position = 'fixed';
timerContainer.style.bottom = '20px';
timerContainer.style.right = '20px';
timerContainer.style.backgroundColor = 'rgba(50, 50, 50, 0.9)';
timerContainer.style.color = '#ffffff';
timerContainer.style.padding = '15px 25px';
timerContainer.style.borderRadius = '16px';
timerContainer.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.4)';
timerContainer.style.fontFamily = "'Poppins', sans-serif"; // Modern font
timerContainer.style.fontSize = '22px';
timerContainer.style.fontWeight = '600';
timerContainer.style.lineHeight = '1.4';
timerContainer.style.textAlign = 'center';
timerContainer.style.zIndex = '9999';
timerContainer.style.transition = 'transform 0.3s ease, opacity 0.3s ease'; // Smooth animations

// Add hover effect
timerContainer.onmouseenter = () => {
    timerContainer.style.transform = 'scale(1.1)';
    timerContainer.style.opacity = '0.9';
};
timerContainer.onmouseleave = () => {
    timerContainer.style.transform = 'scale(1)';
    timerContainer.style.opacity = '1';
};

// Add to the document
document.body.appendChild(timerContainer);


// Function to update the timer
function updateTime() {
  const now = new Date();
  const targetDate = new Date("December 31, 2025 23:59:59").getTime();
  const difference = targetDate - now.getTime();

  if (difference <= 0) {
    timerContainer.innerText = "🎉 Happy New Year 2026!";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  timerContainer.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update the timer every second
setInterval(updateTime, 1000);
updateTime(); 

