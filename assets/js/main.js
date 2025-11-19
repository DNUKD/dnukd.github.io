console.log("main.js loaded");


// ===== TAB SWITCHING =====
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class from buttons
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Hide all tabs
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));

    // Show target tab
    const target = btn.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});


// ===== CONTACT BUTTON =====
const contactBtn = document.getElementById("contactBtn");
const contactInfo = document.getElementById("contactInfo");

let contactOpen = false;

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!contactOpen) {
    contactInfo.innerHTML = `
      <span class="mail-inline">mail me at</span>
      <a href="mailto:h.ilona27@gmail.com" class="mail-highlight">
        h.ilona27@gmail.com
      </a>
    `;
    contactOpen = true;
  } else {
    contactInfo.innerHTML = "";
    contactOpen = false;
  }
});


