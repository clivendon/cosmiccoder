// Get the canvas element
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define the star properties
const starCount = 100;
const starSize = 2;
const starSpeed = 0.5;

// Create an array to hold the star objects
const stars = [];

// Function to create a new star
function createStar() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const speed = Math.random() * starSpeed;
  return { x, y, speed };
}

// Initialize the stars
for (let i = 0; i < starCount; i++) {
  stars.push(createStar());
}

// Define the text properties
const text = 'Cosmic Coder';
const textSize = 64;
const textColor = '#fff';
const textX = canvas.width / 2;
const textY = canvas.height / 2;

// Define the bounce effect properties
const bounceDuration = 1000;
const bounceDelay = 200;
const bounceEasing = 'easeInOutQuint';

// Function to draw the text with bounce effect
function drawText() {
  ctx.font = `${textSize}px Arial`;
  ctx.fillStyle = textColor;
  ctx.textAlign = 'center';
  ctx.textBaseline ='middle';
  ctx.fillText(text, textX, textY);
}

// Bounce effect function using anime.js
function bounceBubbles() {
  anime({
    targets: '.text',
    scale: [
      { value: 1.2, duration: bounceDuration, delay: bounceDelay, easing: bounceEasing },
      { value: 1, duration: bounceDuration, delay: bounceDelay, easing: bounceEasing }
    ],
    opacity: [
      { value: 0.5, duration: bounceDuration, delay: bounceDelay, easing: bounceEasing },
      { value: 1, duration: bounceDuration, delay: bounceDelay, easing: bounceEasing }
    ]
  });
}

// Add event listener for mouseover
canvas.addEventListener('mouseover', bounceBubbles);

// Main animation loop
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the background
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Move and draw the stars
  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(star.x, star.y, starSize, 0, Math.PI * 2);
    ctx.fill();
  }

  // Draw the text
  drawText();

  // Request the next frame
  requestAnimationFrame(animate);
}

// Start the animation
animate();