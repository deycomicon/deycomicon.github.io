// script.js

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const isAm = hours < 12;

    // Format to 12-hour clock
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Update the clock element
    document.getElementById('time').textContent = hours + ':' + minutes + (isAm ? ' AM' : ' PM');
}

// Update the clock every 60 seconds
setInterval(updateClock, 60000);

// Set initial time on page load
updateClock();
