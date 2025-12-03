// Countdown to coronation date: January 10, 2026
document.addEventListener('DOMContentLoaded', function() {
    const coronationDate = new Date('2026-01-10T00:00:00');
    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date();
        const diff = coronationDate - now;

        if (diff <= 0) {
            countdownElement.innerHTML = '<p class="countdown-complete">IL MOMENTO È ARRIVATO!</p>';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            <div class="countdown-item">
                <span class="number">${days}</span>
                <span class="label">Giorni</span>
            </div>
            <div class="countdown-item">
                <span class="number">${hours.toString().padStart(2, '0')}</span>
                <span class="label">Ore</span>
            </div>
            <div class="countdown-item">
                <span class="number">${minutes.toString().padStart(2, '0')}</span>
                <span class="label">Minuti</span>
            </div>
            <div class="countdown-item">
                <span class="number">${seconds.toString().padStart(2, '0')}</span>
                <span class="label">Secondi</span>
            </div>
        `;
    }

    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
