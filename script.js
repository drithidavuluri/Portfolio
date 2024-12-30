function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleDropdown() {
  const dropdownContent = document.querySelector(
    ".menu-links .dropdown .dropdown-content"
  );
  if (dropdownContent) {
    dropdownContent.classList.toggle("open");
  }
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

// Dynamically navigate to publication details
document.querySelectorAll(".publication-btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const publicationId = event.target.getAttribute("data-publication-id");
    if (publicationId) {
      window.location.href = `publication${publicationId}.html`;
    }
  });
});

// const journeyItems = [
//   {
//     title: "Among the Top 1% in JEE",
//     link: "jee.html",
//   },
//   {
//     title: "AyurTech@IITJ - NLP Researcher",
//     link: "ayurtech.html",
//   },
//   {
//     title: "Amazon ML Summer School 2024",
//     link: "amazon_ml.html",
//   },
//   {
//     title: "Top 2.5% in Girl Hackathon 2023 by Google",
//     link: "girl_hackathon.html",
//   },
//   {
//     title: "Winter School on Graphs & Games",
//     link: "winter_school.html",
//   },
//   {
//     title: "Think Swiss Scholarship Application",
//     link: "think_swiss.html",
//   },
//   {
//     title: "Landing My Dream Internship at TUM",
//     link: "tum_internship.html",
//   },
//   {
//     title: "Top 50 in NXP WIT Program",
//     link: "nxp_wit.html",
//   },
// ];

// const itemsPerPage = 3; // Number of items to show per page
// let currentPage = 1; // Start with the first page

// // Function to render the items
// function renderJourneyItems() {
//   const journeyGrid = document.getElementById("journey-grid");
//   journeyGrid.innerHTML = ""; // Clear the grid
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = Math.min(startIndex + itemsPerPage, journeyItems.length);

//   for (let i = startIndex; i < endIndex; i++) {
//     const item = journeyItems[i];
//     const card = document.createElement("div");
//     card.className = "journey-card";
//     card.innerHTML = `
//       <h3>${item.title}</h3>
//       <a href="${item.link}" class="btn btn-color-2 journey-btn">Read My Story</a>
//     `;
//     journeyGrid.appendChild(card);
//   }

//   // Enable or disable pagination buttons
//   document.getElementById("prev-btn").disabled = currentPage === 1;
//   document.getElementById("next-btn").disabled =
//     endIndex >= journeyItems.length;
// }

// // Event listeners for pagination buttons
// document.getElementById("prev-btn").addEventListener("click", () => {
//   if (currentPage > 1) {
//     currentPage--;
//     renderJourneyItems();
//   }
// });

// document.getElementById("next-btn").addEventListener("click", () => {
//   if (currentPage * itemsPerPage < journeyItems.length) {
//     currentPage++;
//     renderJourneyItems();
//   }
// });

// // Initial render
// renderJourneyItems();
const milestones = [
  {
    text: "AyurTech@IITJ - NLP Researcher",
    link: "nlp.html",
  },
  {
    text: "Landing My Dream Internship at TUM",
    link: "nlp.html",
  },
  {
    text: "Think Swiss Scholarship Application",
    link: "nlp.html",
  },
  {
    text: "Top 50 in NXP WIT Program",
    link: "nlp.html",
  },
  {
    text: "Top 2.5% in Girl Hackathon 2023 by Google",
    link: "nlp.html",
  },
  {
    text: "Amazon ML Summer School 2024",
    link: "nlp.html",
  },
  {
    text: "Teaching Assistant - Principles of Computer Systems - I",
    link: "nlp.html",
  },
  {
    text: "Winter School on Graphs & Games by IITJ, Nvidia, and Google",
    link: "nlp.html",
  },
  {
    text: "Captain, Women Squash Team, IITJ",
    link: "nlp.html",
  },
  {
    text: "Ranked Among Top 1% in JEE (1.1 Million Participants)",
    link: "nlp.html",
  },
];

let currentStartIndex = 0;
const itemsPerPage = 3;

function renderMilestones() {
  const journeyList = document.getElementById("journey-list");
  journeyList.innerHTML = "";

  const visibleMilestones = milestones.slice(
    currentStartIndex,
    currentStartIndex + itemsPerPage
  );

  visibleMilestones.forEach((milestone) => {
    const item = document.createElement("div");
    item.classList.add("journey-item");

    const text = document.createElement("p");
    text.textContent = milestone.text;

    const link = document.createElement("a");
    link.href = milestone.link;
    link.textContent = "Read More";

    item.appendChild(text);
    item.appendChild(link);

    journeyList.appendChild(item);
  });

  // Update button states
  document.getElementById("prev-btn").disabled = currentStartIndex === 0;
  document.getElementById("next-btn").disabled =
    currentStartIndex + itemsPerPage >= milestones.length;
}

// Event listeners for pagination
document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentStartIndex > 0) {
    currentStartIndex -= itemsPerPage;
    renderMilestones();
  }
});

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentStartIndex + itemsPerPage < milestones.length) {
    currentStartIndex += itemsPerPage;
    renderMilestones();
  }
});

// Initial render
renderMilestones();
