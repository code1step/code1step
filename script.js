const glow = document.getElementById('mouse-glow');
const grid = document.querySelector('.tile-grid');

const rootStyles = getComputedStyle(document.documentElement);
const tileSize = parseInt(rootStyles.getPropertyValue('--tile-size'));
const gap = parseInt(rootStyles.getPropertyValue('--gap'));

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight - 100; // initial position near bottom
let glowX = mouseX;
let glowY = mouseY;

let userMovedMouse = false;

// On first mouse movement, update position and show glow
window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  if (!userMovedMouse) {
    userMovedMouse = true;
    glow.classList.add('active'); // reveal the glow
  }
});

function animateGlow() {
  const speed = 0.1;

  if (userMovedMouse) {
    glowX += (mouseX - glowX) * speed;
    glowY += (mouseY - glowY) * speed;
  }

  glow.style.left = `${glowX}px`;
  glow.style.top = `${glowY}px`;

  requestAnimationFrame(animateGlow);
}

// Set initial glow position
glow.style.left = `${glowX}px`;
glow.style.top = `${glowY}px`;

animateGlow();



// Dynamic grid fill
function generateTiles() {
  grid.innerHTML = ''; // Clear existing

  const cols = Math.ceil(window.innerWidth / (tileSize + gap));
  const rows = Math.ceil(window.innerHeight / (tileSize + gap));
  const totalTiles = cols * rows;

  // Update CSS grid
  grid.style.gridTemplateColumns = `repeat(${cols}, ${tileSize}px)`;
  grid.style.gridTemplateRows = `repeat(${rows}, ${tileSize}px)`;

  for (let i = 0; i < totalTiles; i++) {
    const tile = document.createElement('div');
    grid.appendChild(tile);
  }
}

// Initial and on resize
generateTiles();
window.addEventListener('resize', generateTiles);


const beforeWords = ["Hidden", "Stuck", "Basic", "Confused", "Local"];
const afterWords = ["Discovered", "Scaling", "Beautiful", "Clear", "Global"];

const beforeEl = document.querySelector(".word-before");
const afterEl = document.querySelector(".word-after");
const arrowEl = document.querySelector(".arrow");

let index = 0;

function updateTransformationWords() {
  // Remove animation classes
  beforeEl.classList.remove("show");
  afterEl.classList.remove("show");
  arrowEl.classList.remove("show");

  setTimeout(() => {
    // Update text
    beforeEl.textContent = beforeWords[index];
    afterEl.textContent = afterWords[index];

    // Add animation classes
    beforeEl.classList.add("show");
    afterEl.classList.add("show");
    arrowEl.classList.add("show");

    index = (index + 1) % beforeWords.length;
  }, 400); // Wait for fade out before changing
}

setInterval(updateTransformationWords, 3000);
updateTransformationWords(); // initial call




//scroll btn
document.querySelector('.scroll-indicator').addEventListener('click', () => {
  document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
});
