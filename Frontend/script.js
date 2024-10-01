const quotes = document.querySelectorAll('.quote');
let currentIndex = 0;

function showNextQuote() {
    quotes[currentIndex].style.opacity = '0';
    quotes[currentIndex].style.transform = 'translateX(-100%)';
    currentIndex = (currentIndex + 1) % quotes.length;
    quotes[currentIndex].style.opacity = '1';
    quotes[currentIndex].style.transform = 'translateX(0)';
}

function startSliding() {
    quotes.forEach((quote, index) => {
        if (index !== currentIndex) {
            quote.style.opacity = '0';
            quote.style.transform = 'translateX(-100%)';
        }
    });
    quotes[currentIndex].style.opacity = '1';
    quotes[currentIndex].style.transform = 'translateX(0)';
}

startSliding();
setInterval(showNextQuote, 5000);
