const tasks = [
  {
    title: "Technical Project Management",
    description:
      "Story of Alignment, Scope of Agility, Specific Accountable and Staggering Approach.",
    image: "images/image1.png"
  },
  {
    title: "Threadbuild",
    description:
      "Watch the video and build threads for better understanding.",
    image: "images/image3.png"
  },
  {
    title: "Structure your pointers",
    description:
      "Organize your thoughts clearly to convey information effectively.",
    image: "images/image4.png"
  },
  {
    title: "4SA Method",
    description:
      "Apply the 4SA thinking method: Situation, Solution, Steps, Assessment.",
    image: "images/image5.png"
  }
];

const board = document.getElementById("board");

tasks.forEach((task, index) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-header" onclick="toggleCard(${index})">
      <span>${task.title}</span>
      <span id="arrow-${index}">▼</span>
    </div>
    <div class="card-body ${index === 0 ? "open" : ""}" id="body-${index}">
      <p>${task.description}</p>
      <img src="${task.image}" class="task-image">
    </div>
  `;

  board.appendChild(card);
});

function toggleCard(index) {
  const body = document.getElementById("body-" + index);
  const arrow = document.getElementById("arrow-" + index);

  body.classList.toggle("open");
  arrow.innerText = body.classList.contains("open") ? "▲" : "▼";
}

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("hidden");
}

document.querySelector(".submit-btn").addEventListener("click", () => {
  alert("Task submitted successfully!");
});
