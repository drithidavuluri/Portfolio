function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Horizontal Neural Network Animation
const canvas = document.getElementById("horizontal-network");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = 150;

let nodes = [];
for (let i = 0; i < 50; i++) {
  nodes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 3 + 1,
    dx: Math.random() * 2 - 1,
  });
}

function drawNodes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(210, 145, 155, 0.8)";
  nodes.forEach((node) => {
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
    ctx.fill();
  });

  // Draw connecting lines
  ctx.strokeStyle = "rgba(210, 145, 155, 0.8)";
  nodes.forEach((node1) => {
    nodes.forEach((node2) => {
      if (
        Math.abs(node1.x - node2.x) < 150 &&
        Math.abs(node1.y - node2.y) < 50
      ) {
        ctx.beginPath();
        ctx.moveTo(node1.x, node1.y);
        ctx.lineTo(node2.x, node2.y);
        ctx.stroke();
      }
    });
  });
}

function animateNodes() {
  nodes.forEach((node) => {
    node.x += node.dx;

    // Reset position when going out of bounds
    if (node.x < 0) node.x = canvas.width;
    if (node.x > canvas.width) node.x = 0;
  });

  drawNodes();
  requestAnimationFrame(animateNodes);
}

animateNodes();

// Adjust canvas size and reinitialize nodes on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = 150;

  nodes = [];
  const updatedNodeCount = canvas.width > 768 ? 50 : 30;
  for (let i = 0; i < updatedNodeCount; i++) {
    nodes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      dx: Math.random() * 2 - 1,
    });
  }
});

document.querySelectorAll(".publication-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = this.closest(".publication-card");
    card.classList.toggle("flipped");
  });
});
