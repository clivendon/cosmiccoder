// Get the canvas element

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define the star properties
const starCount = 600;
const starSpeed = 0.5;

// Create an array to hold the star objects
const stars = [];

// Function to create a new star
function createStar() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const speed = Math.random() * starSpeed;
  const size = getRandomArbitrary(1, 4); // random size between 1 and 4
  return { x, y, speed, size };
}

// Initialize the stars
for (let i = 0; i < starCount; i++) {
  stars.push(createStar());
}

// Main animation loop
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the background
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Move and draw the stars
  for (let i = 0; i < starCount; i++) {
    const star = stars[i];
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2); // use star.size instead of starSize
    ctx.fill();
  }

  // Request the next frame
  requestAnimationFrame(animate);
}

// Start the animation
animate();