const cards = document.querySelectorAll('.cardm'); // Get all cards
const dots = document.querySelectorAll('.dot'); // Get all dots
let currentIndex = 0; // Current card index
const cardWrapper = document.querySelector('.card-wrapper'); // Card container
let autoSlideInterval; // Variable for auto-sliding interval

// Function to slide the card-wrapper to the correct position
function moveSlide(index) {
  const totalCards = cards.length;

  if (index >= totalCards) {
    currentIndex = 0; // Loop back to the first card
  } else if (index < 0) {
    currentIndex = totalCards - 1; // Loop back to the last card
  } else {
    currentIndex = index;
  }

  // Calculate the percentage to translate based on the current card
  const translateX = -currentIndex * 100;
  cardWrapper.style.transform = `translateX(${translateX}%)`;

  // Update active dot
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

// Function to start auto-sliding
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentIndex += 1;
    moveSlide(currentIndex);
  }, 3000); // Change slide every 3 seconds
}

// Function to stop auto-sliding
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Event listener for dot clicks (manual slide)
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    stopAutoSlide(); // Stop auto-sliding when a dot is clicked
    moveSlide(index); // Move to the corresponding slide
    currentIndex = index; // Update the current index
    startAutoSlide(); // Restart auto-sliding after manual action
  });
});

// Initialize: show the first card and start auto-sliding
moveSlide(currentIndex);
startAutoSlide();
