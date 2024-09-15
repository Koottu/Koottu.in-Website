const cards = document.querySelectorAll('.cardm'); // Get all cards
const dots = document.querySelectorAll('.dot'); // Get all dots
let currentIndex = 0; // Current card index

// Function to show the current card and update dots
function showCard(index) {
    // Hide all cards
    cards.forEach((card, i) => {
        card.style.display = i === index ? 'block' : 'none';
    });

    // Update active dot
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Event listener for dot clicks
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index; // Update current index
        showCard(currentIndex); // Show the corresponding card
    });
});

// Initialize: show the first card
showCard(currentIndex);
