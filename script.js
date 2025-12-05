// Countdown to coronation date: January 10, 2026
document.addEventListener('DOMContentLoaded', function() {
    const coronationDate = new Date('2026-01-10T00:00:00');
    const countdownElement = document.getElementById('countdown');
    
    // Exit early if countdown element doesn't exist
    if (!countdownElement) return;

    let intervalId;

    // Helper function to create countdown item elements safely
    function createCountdownItem(number, label) {
        const item = document.createElement('div');
        item.className = 'countdown-item';
        
        const numberSpan = document.createElement('span');
        numberSpan.className = 'number';
        numberSpan.textContent = number;
        
        const labelSpan = document.createElement('span');
        labelSpan.className = 'label';
        labelSpan.textContent = label;
        
        item.appendChild(numberSpan);
        item.appendChild(labelSpan);
        return item;
    }

    function updateCountdown() {
        const now = new Date();
        const diff = coronationDate - now;

        // Clear existing content
        countdownElement.textContent = '';

        if (diff <= 0) {
            const completeMsg = document.createElement('p');
            completeMsg.className = 'countdown-complete';
            completeMsg.textContent = 'IL MOMENTO È ARRIVATO!';
            countdownElement.appendChild(completeMsg);
            if (intervalId) {
                clearInterval(intervalId);
            }
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        countdownElement.appendChild(createCountdownItem(String(days), 'Giorni'));
        countdownElement.appendChild(createCountdownItem(String(hours).padStart(2, '0'), 'Ore'));
        countdownElement.appendChild(createCountdownItem(String(minutes).padStart(2, '0'), 'Minuti'));
        countdownElement.appendChild(createCountdownItem(String(seconds).padStart(2, '0'), 'Secondi'));
    }

    // Update countdown every second
    updateCountdown();
    intervalId = setInterval(updateCountdown, 1000);
});
